// pages/organization/partyMemberFile/partyMemberFile.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverurl: app.globalData.serverAddress,

    leftarea: [
      "姓名",
      "曾用名",
      "性别",
      "民族",
      "籍贯",
      "出生地",
      "户口所在地",
      "家庭住址",
      "手机号",
      "家庭出身",
      "出生日期",
      "身份证号",
      "婚姻状况",
      "组织所在单位",
      "个人身份",
      "学历",
      "专业",
      "毕业院校",
      "提交入党申请书",
      "入党时间",
      "转正时间",
      "发展类型",
      "转出单位"
    ],

    rightarea: 
      [
      "陈进雄",
      "陈进雄",
      "男",
      "汉",
      "广东",
      "广东",
      "广东梅州",
      "广东省肇庆市端州区肇庆学院博学书院第一栋三楼342房",
      "",
      "",
      "1996-02-09",
      "111111222323654655",
      "未婚",
      "肇庆学院",
      "团员",
      "本科",
      "软件工程",
      "肇庆学院",
      "2018-08-08",
      "",
      "",
      "",
      "",
      ""
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: that.data.serverurl +'userInfo/partyInfo',
      method: 'GET',
      header: app.globalData.header,
      success: function (res) {
        if (res.data.status == 0 && res.statusCode == 200)
        {
          console.log(res.data.data)
        }
      }
    })
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

  }
})