// pages/test/test.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localUrl:'/pages/test/test',
    turnToWay: 'navigateTo'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var isLogin = app.globalData.hadLogin;
    var add = app.globalData.serverAddress;
    if (!isLogin) {
      var localUrl = this.data.localUrl;
      var turnToWay = this.data.turnToWay;
      app.checkLogin(localUrl, turnToWay);
    }else{
    wx.request({
      url: add +'study/get_study_documents_by_label_id.do',
      data: {
        label_id:[1]
      },
      method:'POST',
      header: {
        // "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "cookie": app.globalData.header.Cookie
      },
      success: function(res){
        console.log(res);
      },
      fail:function(res){
        console.log(res);
      }
    })
    }
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