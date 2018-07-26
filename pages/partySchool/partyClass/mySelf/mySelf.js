Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    wait: [{
      imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
      imgNavigateTo: "./../class/swiperItem/swiperItem_home/swiperItem_home",
      title: "习近平总书记系列重要讲话读本(2016年版)",
      requiredImg:"/images/partySchool_icon/required.png",
      haveDone:20,
      end: "截止至2019-5-31"
    },
    {
      imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
      imgNavigateTo: "./../class/swiperItem/swiperItem_home/swiperItem_home",
      title: "习近平关于全面从严治党论述摘编",
      requiredImg: "/images/partySchool_icon/required.png",
      haveDone: 20,
      end: "截止至2018-12-31"
    },
    {
      imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
      imgNavigateTo: "./../class/swiperItem/swiperItem_home/swiperItem_home",
      title: "习近平总书记系列重要讲话读本(2016年版)",
      requiredImg: "/images/partySchool_icon/required.png",
      haveDone: 20,
      end: "已超时30天"
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
  //点击课程跳转
  targetTo: function(e){
    console.log(e);
    var url = e.currentTarget.dataset.targetto;
    wx.navigateTo({
      url: url
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
    
  }
})