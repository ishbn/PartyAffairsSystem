Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    examing:[
      {
        title:"学习十九大，共创未来知识答题",
        endTime:"2018-10-31 12:00",
        image:"/images/partySchool_icon/doing.png",
        join:"254",
        targetUrl:'./../content/content'
      },
      {
        title: "2018年党规党纪知识竞赛",
        endTime: "2018-12-31 09:27",
        image: "/images/partySchool_icon/doing.png",
        join: "412",
        targetUrl: './../content/content'
      }
    ],
    endExam: [
      {
        title: "学习十九大，共创未来知识答题",
        endTime: "2018-1-31 12:00",
        image: "/images/partySchool_icon/end.png",
        join: "254"
      },
      {
        title: "2018年党规党纪知识竞赛",
        endTime: "2018-2-31 09:27",
        image: "/images/partySchool_icon/end.png",
        join: "412"
      }
    ]
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
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
  //页面跳转
  menuTargetTo: function (e) {
    var url = e.target.dataset.targeturl;
    wx.navigateTo({
      url: url
    })
  }
})