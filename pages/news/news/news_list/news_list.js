// pages/news/news/news_list/news_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    broadcast: [
      '/images/background/dj.png',
      '/images/background/dj1.png',
      '/images/background/dj1.png'
    ],
    list_news: [
      {
        news_id:'1',
        title: "在习近平党建思想指引下实干担当",
        date: '2018-07-11',
        image: '/images/background/dj1.png'
      },
      {
        news_id: '2',
        title: "如何增强抓落实的本领？",
        date: '2018-07-11',
        image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      },
      {
        news_id: '3',
        title: "如何增强抓落实的本领？",
        date: '2018-07-11',
        image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      },
      {
        news_id: '4',
        title: "如何增强抓落实的本领？",
        date: '2018-07-11',
        image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      }
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
  
  }
  /*
  showDetail:function(){
    wx.navigateTo({
      url: '../new_detail/new_detail',
      success: function(res) {},
      fail: function(res) {
        wx.showToast({
          title: '暂时无法打开',
          icon:'none'
        })
      },
      complete: function(res) {},
    })
  }*/
})