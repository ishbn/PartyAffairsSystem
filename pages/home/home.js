// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverAddress:null,
    menu: [
      {
        imgUrls: '/images/icon_function/file.png',
        descs: '党员档案',
        target_page:'/pages/organization/partyMemberFile/partyMemberFile'
      }, 
      {
        imgUrls: '/images/icon_function/partyClass.png',
        descs: '微党课',
        target_page: "/pages/partySchool/partyClass/class/class_home/class_home"
      },
      {
        imgUrls: '/images/icon_function/threeOne.png',
        descs: '三会一课',
        target_page:'/pages/partySchool/threeOne/home/home'
      },
      {
        imgUrls: '/images/icon_function/taskManagement.png',
        descs: '专题教育',
        target_page:'/pages/partySchool/education/home/home'
      },
      {
        imgUrls: '/images/icon_function/notice.png',
        descs: '我的通知',
        target_page:'/pages/news/notices/notices_list/notices_list'
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '党建要闻',
        target_page:'/pages/news/news/news_list/news_list'
      },
      {
        imgUrls: '/images/icon_function/examination.png',
        descs: '在线考试',
        target_page:'/pages/partySchool/examination/home/home'
      },
      {
        imgUrls: '/images/icon_function/thoughtReport.png',
        descs: '思想汇报',
        target_page:'/pages/wode/thoughtreport/thoughtreport'
      },
      {
        imgUrls: '/images/icon_function/taskManagement.png',
        descs: '任务管理',
        target_page:'/'
      },
      {
        imgUrls: '/images/icon_function/more.png',
        descs: '分类',
        target_page:'/'
      }
     
    ],
    newsLength:4,
    list_news:[],
    noticesLength:4,
    list_notices: []
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取服务器地址
    var addr = app.globalData.serverAddress;
    that.setData({
      serverAddress:addr
    });
    //获取新闻列表
    that.getNewsList();
    //获取公共列表
    that.getNoticeList();
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
    //获取公共列表
    that.getNoticeList();
    //设置dropDownTime之后停止刷新，下拉框恢复原位
    setTimeout(function (){
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
  /**获取新闻列表 */
  getNewsList:function(){
    var that = this;
    var length = that.data.newsLength;
    var addr = that.data.serverAddress;
    wx.request({
      url: addr +'homelist/newslist/'+length,
      success:function(res){
        //console.log(res);
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
  },
  getNoticeList:function(){
    var that = this;
    var length = that.data.noticesLength;
    var addr = that.data.serverAddress;
    wx.request({
      url: addr + 'homelist/noticeslist/public/' + length,
      success: function (res) {
        //console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            list_notices: res.data.data
          });
        }
      },
      fail: function (res) {
        console.log('请求公告列表出错！' + res);
      }
    })
  }
})