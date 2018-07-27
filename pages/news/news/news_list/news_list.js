// pages/news/news/news_list/news_list.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverAddress:'',
    broadcast: [
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg'
    ],
    list_news: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var addr = app.globalData.serverAddress ;
    //获取全局变量：服务器地址
    that.setData({
      serverAddress: addr
    });
    //获取新闻列表
    that.getNewsList();
    
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
    var that = this;
    // 下拉刷新时间
    var time = app.globalData.dropDownTime;
    //获取新闻列表
    that.getNewsList();
    //设置dropDownTime之后停止刷新，下拉框恢复原位
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, time);

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
  getNewsList:function(){
    var that = this;
    var addr =that.data.serverAddress;
    //显示新闻条数
    var news_length = 10;
    // 请求新闻列表
    wx.request({
      url: addr+ 'homelist/newslist/' + news_length,
      success: function (res) {
        // console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            list_news: res.data.data
          });
        }
      },
      fail: function (res) {
        console.log('请求新闻列表出错！' + res);
      }
    })
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