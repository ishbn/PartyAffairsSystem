// pages/wode/feedback/feedback_home/feedback_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerimg: '/images/background/followParty.jpg',
    menu: [
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '我要反馈',
        explain: '发现问题，一键反馈',
        targetPages: "./../tofeedback/tofeedback"
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '我提交的',
        explain: '反馈信息，快速解决',
        targetPages: "./../feedback_list/feedback_list"
      }
        /*{
          imgUrls: '/images/icon_function/partyNews.png',
          descs: '反馈公开',
          explain: '党内动态，即时了解',
          targetPages: "./../publicfeedback/publicfeedback"
        }*/
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  menuTargetTo: function (e) {
    console.log(e);
    var src = e.target.dataset.targeturl;
    console.log(src);
    wx.navigateTo({
      url: src
    })
  }
})