// pages/organization/detailsActivity/detailsActivity.js
var WxParse = require('../../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      events_id: 1,
      title:"肇庆徒步日志愿活动",
      time: "2018-09-25 15:25",
      content: '<h4><blockquote style="text-align: center; "><span style="font-weight: bold; font-style: italic; text-decoration-line: underline; background-color: rgb(249, 150, 59);"><code>对方的身份第三方的身份的说法​</code></span></blockquote></h4>',
      events_type: "undo"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("接受到的Id为："+options.id)
    //向服务器请求该id对应的活动内容
    var that = this;
    WxParse.wxParse('details.content', 'html', that.data.details.content, that, 5);
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

  cancel: function(){
    //向服务器发送状态改变，取消报名
  },

  confirm: function(){
    //报名，获得该活动id发到后台进行用户与该活动的关联
    console.log("用户报名id为：" + this.data.details.events_id+"的活动")
  }
})