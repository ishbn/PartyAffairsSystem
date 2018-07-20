// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
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
  /**重置账号 */
  resetbtn:function(){
    var that = this;
    that.setData({
      username: ''
    })
  },
  /**重置密码 */
  resetPswBtn:function(){
    var that = this;
    that.setData({
      password: ''
    })
  },
  /**输入登录用户名 */
  setUsername:function(e){
    var user = e.detail.value;
    var that = this;
    that.setData({
      username: user
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
  dologin:function(){
    var that = this;
    //判别是否为空，true执行登录查询
    var flag =  that.docheck();
    if(flag){
      console.log(that.data.username);
      console.log(that.data.password);
      that.showError();
      // 登录请求验证
      wx.request({
        url: '',
        success:function(res){
          //do something
        },
        fail:function(){
          //do something
        }
      })
    }
  },
  /**检查登录信息 */
  docheck:function(){
    var that = this;
    if(that.data.username === ''){
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
  showError:function(){
    wx.showModal({
      title: '提示',
      content: '用户名或密码错误',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})