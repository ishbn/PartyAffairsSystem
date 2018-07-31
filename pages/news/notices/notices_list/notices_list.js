// pages/news/notices/notices_list/notices_list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverAddress:null,
    notices_list:null,
    pageNum: 1,     //当前页数
    totalPageNum: '',//总页数
    notices_length: 6,   //一页的条数
    more: true,
    requestWay: 'more',//请求方式为more or reflush,判断加载更多还是刷新，刷新方式跟初次请求一样


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var addr = app.globalData.serverAddress;  
    that.setData({
      serverAddress: addr,
      requestWay: "reflush"
    });
    // 查询网络并发起查询请求
    that.checkNetWork();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function () {
  
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
    var that = this;
    // 下拉刷新时间
    var time = app.globalData.dropDownTime;

    that.setData({
      requestWay: "reflush"
    });
    //检查网络状态并查询数据
    that.checkNetWork();

    //设置dropDownTime之后停止刷新，下拉框恢复原位
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, time);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 是否达到最大页数，是则显示没有更多，否则继续请求数据
    if (that.data.pageNum >= that.data.totalPageNum) {
      that.setData({
        more: false
      });
    } else {
      that.setData({
        requestWay: "more"
      });
      //检查网络状态并查询数据
      that.checkNetWork();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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
  },
  /**检查网络信息并提示 */
  checkNetWork() {
    var that = this;
    var reqWay = that.data.requestWay;
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType;
        if (networkType == 'none') {
          // 提示网络出错
          wx.showToast({
            title: '加载失败，请检查网络',
            icon: 'none'
          });
        } else {
          if (reqWay == 'more') {
            // 发起加载更多网络请求
            that.getMoreNotices();
          } else if (reqWay == 'reflush') {
            // 发起数据刷新网络请求
            that.getNoticesList();
          }

        }
      }
    })
  },
  getNoticesList:function(){
    var that = this;
    // 获取服务器地址
    var addr = that.data.serverAddress;
    // 刷新恢复第一页
    that.setData({
      pageNum: 1
    });
    //显示条数
    var notices_length = that.data.notices_length;
    //页数
    var noticesPage = that.data.pageNum;
    // 请求数据列表
    wx.request({
      url: addr + 'noticesMenu/public/' + noticesPage + '/' + notices_length,
      success: function (res) {
        // console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          //获取到的数据
          var list = res.data.data.list;
          //更新滑块的数据
          // that.setBroadcast(list);

          // 更新数据
          that.setData({
            notices_list: list,
            pageNum: res.data.data.pageNum,
            totalPageNum: res.data.data.totalPageNum
          });
        }
      },
      fail: function (res) {
        // console.log('请求通知列表出错！' + res);
        wx.showToast({
          title: '加载失败，请稍后重试',
          icon: 'none'
        })
      }
    })
  },
  /**加载更多数据 */
  getMoreNotices() {
    var that = this;
    // 获取服务器地址
    var addr = that.data.serverAddress;
    //显示新闻条数
    var notices_length = that.data.notices_length;
    // 新闻页数
    var noticesPage = that.data.pageNum + 1;
    // 请求新闻列表
    wx.request({
      url: addr + 'noticesMenu/public/' + noticesPage + '/' + notices_length,
      success: function (res) {
        // console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          //获取到的数据
          var list = res.data.data.list;
          //原来的数组
          var array = that.data.notices_list;
          //加进原来的数组
          for (var i = 0; i < list.length; i++) {
            array.push(list[i]);
          }
          // 更新数据
          that.setData({
            notices_list: array,
            pageNum: res.data.data.pageNum,
            totalPageNum: res.data.data.totalPageNum
          });
        }
      },
      fail: function (res) {
        // console.log('请求新闻列表出错！' + res);
        wx.showToast({
          title: '加载失败，请稍后重试',
          icon: 'none'
        })
      }
    })
  }
})