// pages/news/notices/notices_list/notices_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:'none',
    foldimg:'/images/icon_base/list.png',
    species:[
      {
        targetword:'123',
        btnName:'123'
      }, {
        targetword: '123',
        btnName: '123'
      }, {
        targetword: '123',
        btnName: '123'
      }
    ],
    currentTab: 0,
    notices_list:[
      {
        notice_id:1,
        date:'07月14',
        month:'07',
        day:'14',
        title:'生命周期函数--监听页面加载0-监听页面加载0-监听页面加载0监听页面生命周期函数--监听页面加载0-监听页面加载0-监听页',
        notices_type:'重要通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
      },
      {
        notice_id: 2,
        date: '2018/07/14',
        month: '07',
        day: '15',
        title: '生命周期函数--监听页面加载1',
        notices_type: '紧急通知'
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
  // 菜单折叠
  foldclick: function (e) {
   
    var preShow = e.currentTarget.dataset.show;
    //console.log("之前的状态为: " + preShow);
    var nowShow = (preShow == "flex" ? "none" : "flex");
    //console.log("点击后状态改变为: " + nowShow);
    this.setData({
      isShow: nowShow
    });
    if (nowShow == "flex")
      this.setData({
        foldimg: "/images/icon_base/list.png"
      });
    if (nowShow == "none")
      this.setData({
        foldimg: "/images/icon_base/list.png"
      });
  },

  /**选择相应的分类，进行搜索 */
  selectspecies:function(){
    console.log('asa');
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

  /**转发到详情页 */
  toDetail:function(e){
    var that = this;
    //获取通知编号
    var notice_id = e.currentTarget.dataset.notice_id;
    //console.log(e.currentTarget.dataset.notice_id);
    //转发
    wx.navigateTo({
      url: '../notice_detail/notice_detail?notice_id='+notice_id,
      fail: function(res) {
        that.showFail();
      }
    })
  },
  /**提示错误信息 */
  showFail:function(){
    wx.showToast({
      title: '加载失败',
      icon:'none'
    })
  }
})