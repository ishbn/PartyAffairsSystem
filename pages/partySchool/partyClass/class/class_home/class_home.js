Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,//新闻高度
    header: 75,//最新课程头部的高度
    underHeight: 0,//头部加新闻的高度
    oneClass: 380,//一条新闻的高度
    count:0, //学习课程数
    look: "/images/partySchool_icon/look.png", //浏览图标
    swiperList: [{
      imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
      imgNavigateTo: "./../firstSwiperItem/firstSwiperItem",
      swpClass: "swp-center",
      info: "习近平总书记系列重要讲话读本(2016年版)",
      rest: 12,
      end: "截止至2019-5-31"
    },
      {
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        imgNavigateTo: "./../secondSwiperItem/secondSwiperItem",
        swpClass: "swp-right",
        info: "习近平关于全面从严治党论述摘编",
        rest: 10,
        end: "截止至2018-12-31"
      },
      {
        imgUrls: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        imgNavigateTo: "../thirdSwiperItem/thirdSwiperItem",
        swpClass: "swp-rightNo",
        info: "习近平总书记系列重要讲话读本(2016年版)",
        rest: 18,
        end: "已超时30天"
      }
    ],
    swiperIndex: 0,
    lastestClassList: [
      {
        image:"/images/background/dj.png",
        info:"中国共产党第十九次全国代表大会关于《中国共产党章程(修正案)》的决议",
        number:45
      },
      {
        image: "/images/background/dj.png",
        info: "习近平：决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利————在中国共产党第十九次全国代表大会上的报告",
        number: 45
      },
      {
        image: "/images/background/dj.png",
        info: "习近平关于全面从严治党论述摘编",
        number: 45
      },
      {
        image: "/images/background/dj.png",
        info: "习近平总书记系列重要讲话读本(2016年版)",
        number: 45
      }
    ]
  },
  //只显示轮播图中间图片的信息
  swiperChange(e) {
    var swp = this.data.swiperList;
    var max = swp.length;
    var idx = e.detail.current;
    var prev = swp[idx - 1];//前一个
    var next = swp[idx + 1];//后一个
    var curView = swp[idx];//当前

    if (prev) {//如果当前的前面有
      if (next) {//当前的后面有
        next.swpClass = "swp-right";
      }
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
      for (var i = 0; i < idx; i++) { //当前前一个的前面所有
        swp[i].swpClass = 'swp-leftNo'
      }
    }
    if (next) {//如果当前的后面有
      if (prev) {//当前的前面有
        prev.swpClass = "swp-left";
      }
      curView.swpClass = "swp-center";
      next.swpClass = "swp-right";
      for (var i = (idx + 2); i < max; i++) {//当前后一个的后面所有
        swp[i].swpClass = 'swp-rightNo'
      }
    } else {
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
    }

    this.setData({
      swiperList: swp,
      swiperIndex:e.detail.current
    })
  },
  //轮播图跳转
  swiperTargetTo: function (e){
    var src = e.target.dataset.targeturl;
    wx.navigateTo({
      url: src
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var length = this.data.lastestClassList.length / 2;
    var oneClass = this.data.oneClass;
    var tabBarHeight = this.data.tabBarHeight;
    var header = this.data.header;
    var count = this.data.swiperList.length;
    this.setData({
      height: oneClass * length,
      underHeight: header + (oneClass * length) + tabBarHeight,
      count: count
    })
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