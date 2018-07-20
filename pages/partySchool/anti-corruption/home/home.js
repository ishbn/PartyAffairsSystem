Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    menu: "/images/partySchool_icon/menu.png", //菜单图标
    open: false, //下拉框的状态
    height: 0,//swiper高度
    oneCorruption: 150,//一条新闻的高度
    corruption:[
      {
        time:"2018.06.05",
        title:"各地纪委监委坚持受贿行贿一起查 严惩“围猎者”",
        corruptionType:"廉政时评",
        middleImage: "/images/background/dj.png"
      },
      {
        time: "2018.06.05",
        title: "各地纪委监委坚持受贿行贿一起查 严惩“围猎者”",
        corruptionType: "反腐动态",
        middleImage: "/images/background/dj.png"
      },
      {
        time: "2018.06.05",
        title: "各地纪委监委坚持受贿行贿一起查 严惩“围猎者”",
        corruptionType: "警钟长鸣",
        middleImage: "/images/background/dj.png"
      }
    ]
  },
  //显示下拉框
  showitem: function () {
    this.setData({
      open: !this.data.open
    });
    if (this.data.menu === "/images/partySchool_icon/menu.png") {
      this.setData({
        menu: "/images/partySchool_icon/menu1.png"
      })
    } else {
      this.setData({
        menu: "/images/partySchool_icon/menu.png"
      })
    }

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
    var length = this.data.corruption.length;
    var oneCorruption = this.data.oneCorruption;
    this.setData({
      height: oneCorruption * length
    })
  },
  //点击蒙层恢复
  hiddenShadow: function () {
    this.setData({
      open: !this.data.open
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