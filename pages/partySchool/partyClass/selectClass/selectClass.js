Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [
      {
        image: "/images/partySchool_icon/onClass.png",
        text: "课程",
        targetPages: "/pages/partySchool/partyClass/class/class_home/class_home"
      },
      {
        image: "/images/partySchool_icon/partyClass.png",
        text: "选课",
        targetPages: "/pages/partySchool/partyClass/mySelf/mySelf"
      },
      {
        image: "/images/partySchool_icon/myself.png",
        text: "我的",
        targetPages: "/pages/partySchool/partyClass/selectClass/selectClass"
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
  // 页面跳转
  menuTargetTo: function (e) {
    console.log(e);
    var src = e.currentTarget.dataset.targeturl;
    wx.reLaunch({
      url: src
    })
  }
})