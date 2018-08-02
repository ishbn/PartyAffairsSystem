// pages/partySchool/examination/exampaper/exampaper.js

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
      title: '考试时间到,已自动提交',
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
    var that = this;
    wx.request({
      method: "GET",// 请求方式
      url: 'http://192.168.199.208:8080/PartyAffairs/exampaper/1', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (result) {
        console.log(result);
        if (result.statusCode ==200 && result.data.status == 0) {
          
          that.setData({
            content: result.data.data
          })

          count_down(that);
        } else {
          wx.showToast({
            title: '请求内容失败',
          })
        }
      }
    })

    
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
    //console.log(e)
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    this.setData({
        temp_checked: e.detail.value
    })

  },

  getsingle: function(e){
    //console.log(e)
    var indexnum = e.currentTarget.dataset.indexnum; 
    console.log(indexnum);
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

    //判断答案是否正确，正确的话分数加1
    if (this.data.userdata[indexnum].userAnswer == this.data.content.singleQuestion[indexnum].answer)
    {
      this.setData({
        score: this.data.score + 1
      })
    }

    console.log("目前分数为", this.data.score)

  },

  checkboxChange: function(e) {

    console.log('checkbox发生change事件，携带value值为：',e.detail.value)

    this.setData({
      temp_checked: e.detail.value
    })

    console.log("多选项为：",this.data.temp_checked)
  },

  getmultiple: function(e){

    

    console.log("多项打印的内容是：", e)

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

    //判断答案，如果正确加2分
    var thatuseranswer = this.data.userdata[indexnum].userAnswer.split(",");
    var thatanswer = this.data.content.multipleQuestion[indexnum - this.data.content.singleQuantity].answer;

    if(thatuseranswer.sort().toString() == thatanswer.sort().toString())
    {
      this.setData({
        score: this.data.score + 2
      })
    }

    console.log("目前得分为：", this.data.score)

  },

  //待解决
  commit: function(e){
    console.log("答案是：", this.data.userdata)
    var score = this.data.score;
    var examPaper = this.data.userdata;
    wx.request({
      url: 'http://192.168.199.208:8080/PartyAffairs/exampaper/2/'+score,
      method: 'POST',
      data: examPaper,
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
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