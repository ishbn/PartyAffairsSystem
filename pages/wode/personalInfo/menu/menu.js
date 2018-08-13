// pages/wode/personalInfo/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {
        icon: '/images/icon_base_new/personalInfo.png',
        name: '个人信息',
        explain: '最新通知，一键查看',
        url: "/pages/wode/personalInfo/updatePsw/updatePsw"
      },
      {
        icon: '/images/icon_base_new/collection.png',
        name: '我的收藏',
        explain: '图文收藏，快速查找',
        url: "/pages/wode/collection/collection"
      },
      {
        icon: '/images/icon_base_new/governmentNews.png',
        name: '党内公示',
        explain: '党内动态，即时了解',
        url: "/pages/news/noticesInner/noticesInner_list/noticesInner_list"
      },
      {
        icon: '/images/icon_base_new/feedback.png',
        name: '我要反馈',
        explain: '反馈意见，解答疑问',
        url: "/pages/wode/feedback/feedback_home/feedback_home"
      },
      {
        icon: '/images/icon_function/thoughtReport.png',
        name: '思想汇报',
        explain: '时刻向组织汇报思想动态',
        url: "/pages/wode/thoughtreport/thoughtreport"
      },
      {
        icon: '/images/icon_base_new/history.png',
        name: '历史学习',
        explain: '温故知新，数往知来',
        url: "/pages/wode/history/history"
      },
      {
        icon: '/images/icon_base_new/history.png',
        name: '修改密码',
        explain: '温故知新，数往知来',
        url: "/pages/wode/history/history"
      }]

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
  
  }
})