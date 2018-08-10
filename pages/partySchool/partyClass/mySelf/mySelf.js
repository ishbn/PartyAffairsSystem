var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    height: 0,//swiper高度
    oneStudy: 150,//一门课程的高度
    localUrl: '/pages/partySchool/partyClass/mySelf/mySelf',//当前文件所在地址
    turnToWay: 'navigateTo',//跳转方式
    mustLearnDocumentList:[],//必学文档集合
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
  //点击课程跳转
  targetTo: function(e){
    console.log(e);
    var url = e.currentTarget.dataset.targetto;
    wx.navigateTo({
      url: url
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var isLogin = app.globalData.hadLogin;
    //检查登录状态
    if (!isLogin) {
      var localUrl = that.data.localUrl;
      var turnToWay = that.data.turnToWay;
      app.checkLogin(localUrl, turnToWay);
    }
    else {
      //弹出“加载”框
      wx.showLoading({
        title: '加载中',
      })
      //检查网络状态并发起数据请求 
      that.checkNetAndDoRequest();
    }
    // var length = this.data.wait.length;
    // var oneClass = this.data.oneClass;
    // if (oneClass * length>750){
    //   this.setData({
    //     height: oneClass * length
    //   })
    // }else{
    //   this.setData({
    //     height: 750
    //   })
    // }
    
  },
  //隐藏加载框
  hideLoading: function () {
    var that = this;
    if (that.data.mustLearnDocumentList.length > 0) {
      setTimeout(function () {
        wx.hideLoading()
      }, 250)
    }
  },
  //检查网络状态并发起数据请求
  checkNetAndDoRequest: function () {
    var that = this;
    wx.getNetworkType({
      success: function (res) {
        //获取网络类型
        var networkType = res.networkType;
        //如果为空
        if (networkType == null) {
          wx.showToast({
            title: '加载失败，网络出现问题',
            icon: 'none'
          });
        } else {
          //确认网络正常，加载必学文档集合
          that.getMustLearnDocumentList();
        }
      },
    })
  },
  //获取文档集合
  getMustLearnDocumentList: function () {
    var that = this;
    //获取服务器地址
    var add = app.globalData.serverAddress;
    wx.request({
      url: add + 'study/get_study_documents_must.do',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": app.globalData.header.Cookie
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            mustLearnDocumentList: res.data.data,
            height: res.data.data.length * that.data.oneStudy
          })
        }
        //确认所有数据加载完毕，隐藏加载框
        that.hideLoading();
      },
      fail: function (res) {
        console.log('必学文档获取失败' + res);
      }
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