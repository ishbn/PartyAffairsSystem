// pages/organization/eventAlbum/eventAlbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foldimg: "/images/icon_function/preFold.png",
    isShow: "none",
    species: [{
        btnName: "全部",
        targetword: "all"
      },
      {
        btnName: "党委",
        targetword: "party"
      },
      {
        btnName: "工会",
        targetword: "union"
      },
      {
        btnName: "团委",
        targetword: "league"
      }
    ],
    contents: [{
        detailsID: "1",
        title: "肇庆学院智慧党建系统建设完成肇庆学院智慧党建系统建设完成",
        time: "2018-07-15 13:07:05",
        leftimg: "/images/organization/school.jpg",
        rightimg: "/images/organization/school1.jpeg",
        coverimg: "/images/organization/school.jpg",
        num: 4
      },
      {
        detailsID: "2",
        title: "第二个相册",
        time: "2018-07-15 14:48:08",
        leftimg: "/images/organization/school.jpg",
        rightimg: "/images/organization/school1.jpeg",
        coverimg: "/images/organization/school.jpg",
        num: 14
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 菜单折叠
  foldclick: function(e) {
    var preShow = e.currentTarget.dataset.show;
    console.log("之前的状态为: " + preShow);
    var nowShow = (preShow == "flex" ? "none" : "flex");
    console.log("点击后状态改变为: " + nowShow);
    this.setData({
      isShow: nowShow
    });
    if (nowShow == "flex")
      this.setData({
        foldimg: "/images/icon_function/fold.png"
      });
    if (nowShow == "none")
      this.setData({
        foldimg: "/images/icon_function/preFold.png"
      });
  },

  // 选择分类
  selectspecies: function() {

  },

  // 进入对应的详情页
  targetToDetails: function(e) {
    //console.log(e);
    var targeturl = "./../detailsAibum/detailsAlbum";
    var id = e.currentTarget.dataset.detailsid;
    console.log(targeturl);
    wx.navigateTo({
      url: targeturl+"?id="+id,
    })
  }

})