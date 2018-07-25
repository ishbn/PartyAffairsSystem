// pages/organization/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    events_list: [
      {
        events_id: 1,
        time: "2018-09-25 15:25",
        deadline: "2018-09-25 15:25",
        title: "肇庆徒步日志愿活动",
        events_type: "undo"
      },
      {
        events_id: 3,
        time: "2018-09-30 11:25",
        deadline: "2018-09-30 13:25",
        title: "星辰大海的征服之路讲解",
        events_type: "undo"
      },
      {
        events_id: 2,
        time: "2018-08-25 10:20",
        deadline: "2018-08-25 19:30",
        title: "肇庆波海公园徒步日志愿活动",
        events_type: "do"
      },
      {
        events_id: 4,
        time: "2018-08-25 10:20",
        deadline: "2018-08-25 19:30",
        title: "肇庆波海公园徒步日志愿活动什么鬼活动",
        events_type: "outdo"
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
  /*更新选中的tab的值 */
  swichNav: function (e) {
    //sconsole.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  /*监听点击tab事件 */
  swiperChange: function (e) {
    //console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },
  targetToDetail: function(e){
    var this_id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: './../detailsActivity/detailsActivity?id='+this_id
    })
  }
})