// pages/news/news/new_detail/new_detail.js
//引入wxparse进行富文本解析
var WxParse = require('../../../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{
      news_id: '7',
      title: "如何增强抓落实的本领？",
      content: "<p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。人生最大的快乐不在于占有什么，而在于追求什么的过程</span></p><img  src='http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'/><p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。</span></p><p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。</span></p><img  src='http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'/>",
      date: '2018-07-11',
      image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg',
      source: '',
      comment: 0,
      praise: 10,
    },
    icon_comt:'/images/icon_base/clickNum.png',
    icon_priaze:'/images/icon_base/icon-priaze.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    WxParse.wxParse('article.content', 'html', that.data.article.content, that);
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