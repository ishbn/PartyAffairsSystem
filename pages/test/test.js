// pages/test/test.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverAddress: null,
    localUrl: '/pages/test/test',
    requestWay: 'more',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
    var addr = app.globalData.serverAddress;
    that.setData({
      serverAddress: addr,
      requestWay: "reflush"
    });
    that.checkLogin();
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
  checkLogin: function () {
    var that = this;
    var hadLogin = app.globalData.hadLogin;
    var url = that.data.localUrl;
    var turnToWay = 'navigateTo';
    if (!hadLogin) {
      //跳转登录
      wx.redirectTo({
        url: '/pages/login/login?targetPage=' + url + '&turnToWay=' + turnToWay,
      })
    }else{
      wx.request({
        url: 'http://localhost:8080/PartyAffairs/examlist/finish',
        header: app.globalData.header,
        success: function (res) {
          console.log(res);
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }
  }
})