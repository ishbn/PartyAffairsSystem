// pages/wode/feedback/mysubmit/mysubmit.js
//引入wxparse进行富文本解析
var WxParse = require('../../../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback_id: '7',
    title: "如何增强抓落实的本领？",
    feedback_type:'产品建议',
    content: "<p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。人生最大的快乐不在于占有什么，而在于追求什么的过程</span></p><img  src='http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'/><p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。</span></p><p><span>人生最大的快乐不在于占有什么，而在于追求什么的过程。</span></p><img  src='http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'/>",
    date: '2018-07-11',
    answer:[
      '<span>人生最大的快乐不在于占有什么，而在于追求什么的过程。111</span>',
      '<span>人生最大的快乐不在于占有什么，而在于追求什么的过程。122</span>'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 解析反馈内容
    WxParse.wxParse('content', 'html', that.data.content, that);
    
    // 解析评论内容
    for(var i=0 ;i<that.data.answer.length;i++){
      WxParse.wxParse('answer['+i+']', 'html', that.data.answer[i], that);
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
  
  }
})