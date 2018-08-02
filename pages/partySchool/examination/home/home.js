var app = getApp();
Page({

  /**
   * 页面的初始数据
      exam_id:'',
      branch_id:'',
      exam_title:'',
      start_time:'',
      end_time:'',
      exam_period:'',
      single_quantity:'',
      multiple_quantity:'',
      pass_score:'',
      finish:'',
   */
  data: {
    currentTab: 0, //预设当前项的值
    serverAddress: null,//服务器地址
    oneExam:125,//一条考试的高度
    examingHeight:0,//待考界面高度
    examedHeight: 0,//已考界面高度
    examing:[],//待考
    examed: [],//已考
    localUrl:'/pages/partySchool/examination/home/home',//当前文件所在地址
    turnToWay:'navigateTo',//跳转方式
    examDescUrl:'../content/content' //考试说明地址
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
    var that = this;
    var isLogin = app.globalData.hadLogin;
    //获取服务器地址
    var add = app.globalData.serverAddress;
    //赋值给本地
    that.setData({
      serverAddress:add
    })
    //登录
    if(!isLogin){
      that.doLogin();
    }
    //检查网络状态并发起数据请求 
    else{
      that.checkNetAndDoRequest();
    }
  },
  //登录
  doLogin: function () {
    var that = this;
    var localUrl = that.data.localUrl;
    var turnToWay = that.data.turnToWay;
    wx.redirectTo({
      url: '/pages/login/login?targetPage=' + localUrl + '&turnToWay=' + turnToWay,
    })
  },
  //检查网络状态并发起数据请求
  checkNetAndDoRequest:function(e){
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        //获取网络类型
        var networkType = res.networkType;
        //如果为空
        if(networkType == null){
          wx.showToast({
            title: '加载失败，网络出现问题',
            icon: 'none'
          });
        }else{
          //获取待考考试数据集合
          that.getExamingList();
          //获取已考考试数据集合
          that.getExamedList();
        }

      },
    })
  },
  //获取待考考试数据集合
  getExamingList: function(){
    var that = this;
    var add = that.data.serverAddress;
    wx.request({
      url: add +'examlist/unfinish',
      header: app.globalData.header,
      success: function(res){
        if (res.statusCode == 200 && res.data.status == 0){
          that.setData({
            examing: res.data.data,
            examingHeight: res.data.data.length * that.data.oneExam
          })
        }
      },
      fail: function(res){
        console.log('待考数据请求失败'+ res);
      }
    })
  },
  //获取已考考试数据集合
  getExamedList: function(){
    var that = this;
    var add = that.data.serverAddress;
    wx.request({
      url: add + 'examlist/finish',
      header: app.globalData.header,
      success: function (res) {
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            examed: res.data.data,
            examedHeight: res.data.data.length * that.data.oneExam
          })
        }
      },
      fail: function (res) {
        console.log('已考数据请求失败' + res);
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
    
  },
  //页面跳转
  menuTargetTo: function (e) {
    var that = this;
    var url = e.target.dataset.targeturl;
    var examId = e.target.dataset.examid;
    wx.navigateTo({
      url: url+'?examId='+examId
    })
  }
})