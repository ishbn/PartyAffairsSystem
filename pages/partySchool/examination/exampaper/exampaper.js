// pages/partySchool/examination/exampaper/exampaper.js
var app = getApp();
/** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
 * 2.提供一个时钟，每10ms运行一次，渲染时钟，再总ms数自减10
 * 3.剩余的秒次为零时，return，给出tips提示说，已经截止
 */

// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
var total_micro_second = 5400 * 1000;

/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    wx.showToast({
      title: '时间到···',
      icon: 'success',
      duration: 2000
    })
    that.commit();
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }, 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  //var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return hr + ":" + min + ":" + sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    examID: null,

    serverurl: app.globalData.serverAddress,

    clock: '',

    score: 0,

    flag: true,

    wheight: null,

    toView:"xxx",

    temp_checked: null,

    i: 0,

    userdata: [

    ],

    content: {
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      examID: options.examID
    })
    //调用函数请求试卷
    this.askforpaper(this.data.examID);


  //获得可使用窗口高度
    try {
      var res = wx.getSystemInfoSync()
      console.log(res.windowHeight)
      this.setData({
        wheight: res.windowHeight
      })
    } catch (e) {
      // Do something when catch error
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  radioChange: function(e) {

    this.setData({
        temp_checked: e.detail.value
    })

  },

  getsingle: function(e){

    /**
     * 通过获得当下题目序号indexnum，设置temp存储所选题ID和答案
     * 以数组形式存储temp对象
     * 多选处相同处理
     */
    var indexnum = e.currentTarget.dataset.indexnum; 

    var temp = {
      questionId: e.currentTarget.dataset.id,
      userAnswer: this.data.temp_checked
    };

    var array = new Array();
    array = this.data.userdata;

    if(array[indexnum]==null){
      array[indexnum] = temp;
    }
    else if(array[indexnum]!=null)
    {
      array.splice(indexnum, 1, temp);
    }
    this.setData({
      userdata: array
    });

  },

  checkboxChange: function(e) {

    //将所选答案存放在临时变量里，方便改动而不影响
    this.setData({
      temp_checked: e.detail.value
    })


  },

  getmultiple: function(e){

    //注释参考函数getsingle处

    var indexnum = e.currentTarget.dataset.indexnum;

    var temp = {
      questionId: e.currentTarget.dataset.id,
      userAnswer: this.data.temp_checked.join(",")
    };

    var array = new Array();
    array = this.data.userdata;

    if (array[indexnum] == null) {
      array[indexnum] = temp;
    }
    else if (array[indexnum] != null) {
      array.splice(indexnum, 1, temp);
    }
    this.setData({
      userdata: array
    });

  },

  //提交答案
  commit: function(e){
    var that = this;

    console.log("答案是：", that.data.userdata)
    var score = 0;
    var examPaper = that.data.userdata;
    var single = that.data.content.singleQuestion;
    var singlenum = that.data.content.singleQuantity;
    var multiplenum = that.data.content.multipleQuantity;
    var multiple = that.data.content.multipleQuestion;

    //开始计算分数,单选
    for (var i = 0; i < singlenum; i++)
    {
      if(examPaper[i].userAnswer == single[i].answer)
      {
        score = score + 1;
      }
    }
    //开始计算多项分数
    for (var j = 0; j < multiplenum; j++)
    {
      var tempexam = examPaper[j+singlenum].userAnswer.split(",");
      var tempanswer = multiple[j].answer;
      if (tempexam.sort().toString() == tempanswer.sort().toString())
      {
        score = score + 2;
      }
    }

    console.log("得分为：", score)

  //发送试卷ID、分数以及对应的题号ID和答案到服务器
    wx.request({
      url: that.data.serverurl+'exampaper/'+that.data.examID+'/'+score,
      method: 'POST',
      data: JSON.stringify(examPaper),
      dataType: 'json',
      header: {
        'content-type': 'application/json', // 默认值
         Cookie: app.globalData.header.Cookie
      },
      success: function (res) {
        console.log(res, that.data.examID)
        if(res.data.data.passScore > score)
        {
          wx.showModal({
            title: '考试不及格,重新考试',
            content: '本次分数为：'+score,
            success: function (res) {
              /**
               * 不及格，重新请求试卷
               */
              wx.redirectTo({
                url: 'exampaper?examID='+that.data.examID,
              })
            }
          })
        }
        else{
          if(res.data.data.topScore >= score)
          {
            wx.showModal({
              title: '考试及格',
              content: '本次分数为：' + score + ',历史最高分为' + res.data.data.topScore,
              success: function (res) {
                wx.switchTab({
                  url: '/pages/home/home',
                  fail: function (res1) {
                    console.log(res1);
                  }
                })
              }
            })
          }
          else{
            wx.showModal({
              title: '考试及格',
              content: '本次分数为：' + score + ',为历史最高分',
              success: function (res) {
                wx.switchTab({
                  url: '/pages/home/home',
                  fail: function (res1) {
                    console.log(res1);
                  }
                })
              }
            })
          }
        }
      }
    })

  },

  //根据examID请求试卷内容
  askforpaper: function(examID){
    var that = this;
    //向服务器发送试卷ID并获得试卷内容
    wx.request({
      method: "GET",// 请求方式
      url: that.data.serverurl + 'exampaper/' + examID, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (result) {
        console.log(result);
        if (result.statusCode == 200 && result.data.status == 0) {

          that.setData({
            content: result.data.data
          })

          count_down(that);//倒计时
        } else {
          wx.showToast({
            title: '请求失败',
            duration: 2000
          })
        }
      }
    })
  },

  showit: function(e){
    this.setData({
      flag: this.data.flag ? false : true
    })
  },

  targetTo: function(e){
    this.setData({
      toView: e.currentTarget.dataset.tabid,
      flag: this.data.flag ? false : true
    })
  }

})