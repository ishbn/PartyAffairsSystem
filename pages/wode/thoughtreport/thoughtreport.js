// pages/wode/thoughtreport/thoughtreport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxlength:4000,
    screenHeight:'520',
    currentTab: 0,
    report: {
      title: '',
      content: '',
      date:''
    },
    myreports:[
      {
        report_id:0,
        title:'我的外卖还没到',
        date:'2018-07-23'
      },
      {
        report_id: 1,
        title: '我的外卖还没到我的外卖还没到我的外卖还没到我的外卖还没到我的外卖还没到我的外卖还没到我的外卖还没到',
        date: '2018-07-23'
      },
      {
        report_id: 2,
        title: '我的外卖还没到',
        date: '2018-07-23'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取屏幕窗口高度
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight - 25;
        that.setData({
          screenHeight: height
        })
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
    var that = this;
    that.setData({
      currentTab: e.detail.current,
    })
    if (e.detail.current == 1){
      that.dorequestdata();
    }
  },
  /**标题输入处理 */
  titleInput: function (e) {
    // console.log(e)
    var that = this;
    var fb = that.data.report;
    var data = e.detail.value;
    fb.title = data;
    that.setData({
      report: fb
    })
  },
  /**内容输入赋值 */
  contentInput: function (e) {
    var that = this;
    var fb = that.data.report;
    var data = e.detail.value;
    fb.content = data;
    that.setData({
      report: fb
    })
  },
  docheck: function () {
    var that = this;
    var data = that.data.report;

    if (data.title === '') {
      that.showCannotNull('标题');
      return true;
    }
    if (data.content === '') {
      that.showCannotNull('内容');
      return true;
    }
    //return false;
  },
  dosubmit:function(){
    var that = this;
    //检查输入项
    var error = that.docheck();
    var chdata = that.data.report;
    //设置提交时间
    chdata.date = new Date();
    that.setData({
      report: chdata
    });
    // console.log(error);
    if (error) {
      return;
    }
    console.log(that.data.report);
    // 进行提交
    /*wx.request({
      url: '',
    })*/
  },
  showCannotNull: function (e) {
    // console.log(e);
    wx.showToast({
      title: e + '不能为空',
      icon: 'none'
    })
  },
  dorequestdata:function(){

    console.log('在这里请求数据');
    // wx.request({
    //   url: '',
    // })
  },
  toDetail:function(e){
    console.log(e);
    var report_id = e.currentTarget.dataset.report_id;
    console.log(report_id);
    wx.navigateTo({
      url: '/pages/wode/thoughtreport_detail/thoughtreport_detail?report_id='+report_id,
    })
  }
})