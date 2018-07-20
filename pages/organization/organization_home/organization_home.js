// pages/organization/organization_home/organization_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg:"/images/background/news/img_header.png",
    menu_messages:[
      {
        menu_img: "/images/icon_function/file.png",
        targeturl:"./../partyMemberFile/partyMemberFile",
        name: "党员档案",
        description:"电子名片，信息共享"
      },
      {
        menu_img: "/images/icon_function/eventAlbum.png",
        targeturl: "./../eventAlbum/eventAlbum",
        name: "活动相册",
        description: "永久保留，随时查看"
      },
      {
        menu_img: "/images/icon_function/vote.png",
        targeturl: "./../vote/vote",
        name: "投票",
        description: "图文并茂，结果立现"
      },
      {
        menu_img: "/images/icon_function/BBS.png",
        targeturl: "./../bbs/bbs",
        name: "党员论坛",
        description: "党内朋友圈，分享新鲜事"
      },
      {
        menu_img: "/images/icon_function/activity.png",
        targeturl: "./../activity/activity",
        name: "活动报名",
        description: "党内活动，不容错过"
      }
    ]

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

  // 新增函数,页面跳转
  targetTo: function(e){
    console.log(e);
    var targeturl = e.target.dataset.targeturl;
    wx.navigateTo({
      url: targeturl,
      success: function(res) {
        console.log("跳转成功")
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})