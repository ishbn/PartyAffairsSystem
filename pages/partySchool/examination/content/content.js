var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:100,//总分
    desc: "在规定时间内完成考试考试期间，个人认真答题，切勿作弊。",//考试说明
    exam: {},//一场考试信息
    localUrl: '/pages/partySchool/examination/content/content',
    targetUrl: '../exampaper/exampaper',//考试详情页地址
    turnToWay:'navigateTo'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var isLogin = app.globalData.hadLogin;
    if (!isLogin) {
      that.doLogin();
    }else{
      that.checkNetAndDoRequest(options.examId);
    }
  },
  //登录
  doLogin: function () {
    var that = this;
    var localUrl = that.data.localUrl;
    var turnToWay = that.data.turnToWay;
    wx.redirectTo({
      url: '/pages/login/login?targetPage=' + localUrl + '&turnToWay=' + turnToWay,
    })
  },
  //检查网络状态并发起数据请求
  checkNetAndDoRequest: function (id) {
    console.log(id);
    var that = this;
    wx.getNetworkType({
      success: function (res) {
        //获取网络类型
        var networkType = res.networkType;
        //如果为空
        if (networkType == null) {
          wx.showToast({
            title: '加载失败，网络出现问题',
            icon: 'none'
          });
        } else {
          //获取待考考试数据集合
          that.getExamingObject(id);
        }

      },
    })
  },
  //获取待考考试对象
  getExamingObject: function(id){
    var that = this;
    var add = app.globalData.serverAddress;
    wx.request({
      url: add + 'examlist/'+id,
      header: app.globalData.header,
      success: function (res) {
        if (res.statusCode == 200 && res.data.status == 0) {
          // console.log(res);
          that.setData({
            exam: res.data.data,
          })
        }
      },
      fail: function (res) {
        console.log('待考数据请求失败' + res);
      }
    })
  },
  //跳转考试界面
  targetTo: function(){
    var that = this;
    var examID = that.data.exam.examId;
    var targetUrl = that.data.targetUrl;
    wx.navigateTo({
      url: targetUrl + '?examID=' + examID,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
})