Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,//新闻高度
    header: 75,//最新课程头部的高度
    underHeight: 0,//头部加新闻的高度
    oneClass: 380,//一条新闻的高度
    currentTab: 0,//中间轮播图的编号
    count:0, //学习课程数
    allClass:"../../selectClass/details/detail",//课程列表地址
    look: "/images/partySchool_icon/look.png", //浏览图标
    swiperList: [
      {
        id:1,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text:"",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      },
      {
        id: 2,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平关于全面从严治党论述摘编",
        text: "",
        end: "截止至2018-12-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      },
      {
        id: 3,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text: "",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      }
    ],
    lastestClassList: [
      {
        id: 4,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text: "",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      },
      {
        id: 5,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text: "",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      },
      {
        id: 6,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text: "",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      },
      {
        id: 7,
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        rest: "80%",
        title: "习近平总书记系列重要讲话读本(2016年版)",
        text: "",
        end: "截止至2019-5-31",
        people: "450",
        targetUrl: './../swiperItem/chapter/chapter'
      }
    ]
  },
  //轮播图中间图片的编号
  swiperChange(e) {
    this.setData({
      currentTab:e.detail.current
    })
  },
  //轮播图跳转
  targetTo: function (e){
    var id = e.currentTarget.dataset.id;
    var url = e.target.dataset.targeturl;
    wx.navigateTo({
      url: url + "?id=" + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // ------------
    // 计算界面高度
    // ------------
    //两列
    var length = this.data.lastestClassList.length / 2;
    //一门课程的高度
    var oneClass = this.data.oneClass;
    //头部的高度
    var header = this.data.header;
    //学习的课程数
    var count = this.data.swiperList.length;
    this.setData({
      height: oneClass * length,
      underHeight: header + (oneClass * length),
      count: count
    })

    // -------
    // 数据请求
    // -------
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