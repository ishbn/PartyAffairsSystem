// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverAddress: null,
    userId: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var addr = app.globalData.serverAddress;
    //获取全局变量：服务器地址
    that.setData({
      serverAddress: addr
    });

    
    //同步获取本地缓存
    try {
      var userLogin  = wx.getStorageSync('userLogin');
      that.setData({
        userId: userLogin.userId,
        password: userLogin.password
      })
    } catch (e) {
      // Do something when catch error

    }

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
  /**重置账号 */
  resetbtn: function () {
    var that = this;
    that.setData({
      userId: ''
    })
  },
  /**重置密码 */
  resetPswBtn: function () {
    var that = this;
    that.setData({
      password: ''
    })
  },
  /**输入登录用户名 */
  setUsername: function (e) {
    var user = e.detail.value;
    var that = this;
    that.setData({
      userId: user
    })
  },
  /**输入密码 */
  setPassword: function (e) {
    var psw = e.detail.value;
    var that = this;
    that.setData({
      password: psw
    })
  },
  /**登录查询 */
  dologin: function () {
    var that = this;
    //判别是否为空，true执行登录查询
    var flag = that.docheck();
    if (flag) {
      // 服务器地址
      var addr = that.data.serverAddress;
      // 登录请求验证
      wx.request({
        method: "post",
        url: addr + "login",
        data: "userId=" + that.data.userId + "&password=" + that.data.password,
        dataType: "json", // 数据类型可以为 text xml json script jsonp
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res);
          if (res.statusCode == 200 && res.data.status == 0){
            // 保存本地，方便下次登录
            that.saveUserInfo(res);
            //提示登录成功
            that.showSuccessful();
            wx.navigateTo({
              url: '/pages/organization/partyMemberFile/partyMemberFile',
              success: function(res) {},
              fail: function(res) {console.log(res)},
              complete: function(res) {},
            })
          }else{
            that.showError();
          }
        },
        fail: function (e) {
          console.log(e)
        }
      })
    }
  },
  /**检查登录信息 */
  docheck: function () {
    var that = this;
    if (that.data.userId === '') {
      //提示用户名不能为空
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return false;
    }
    if (that.data.password === '') {
      //提示用户名不能为空
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return false;
    }
    return true;
  },
  showError: function () {
    wx.showToast({
      title: '用户名或密码错误',
      icon:'none'
    })
  },
  saveUserInfo: function (res) {
    var that = this;
    var userlogin ={
      userId: that.data.userId,
      password:that.data.password
    }
    wx.setStorage({
      key: "userLogin",
      data: userlogin
    });
    wx.setStorage({
      key: "userInfo",
      data: res.data.data
    });
  },
  showSuccessful:function(){
    wx.showToast({
      title: '登录成功',
    })
  }
})