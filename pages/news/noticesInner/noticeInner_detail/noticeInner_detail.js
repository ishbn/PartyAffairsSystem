// pages/news/noticesInner/noticeInner_detail/noticeInner_detail.js
//引入wxparse进行富文本解析
var WxParse = require('../../../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice_id: null,
    title: '加班公告',
    content: '<div><h2>我是党内公告</h2></div><br/><div>今天加班！</div>',
    date: '2018-07-17',
    clickNum: 100,
    praise: 10,
    icon_click: '/images/icon_base/clickNum.png',
    icon_priaze: '/images/icon_base/icon-priaze.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var notice_id = options.notice_id;
    var that = this;
    //请求数据
    /*wx.request({
      url: '',
      success:function(res){
        //更新数据

      },
      fail: function (res){
        //消息提示
      }
    })*/
    //富文本解析
    WxParse.wxParse('content', 'html', that.data.content, that);
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