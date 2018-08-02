// pages/wode/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localUrl: '/pages/wode/wode/wode',
    headerimg:'/images/background/followParty.jpg',
    headImg:'http://p.qlogo.cn/bizmail/vk6fO6LOYPGt3CCUQjATC0cKoyzpDpVyc2Ip2nA3OFxQcNTGvIFlxg/0',
    username:'hbn',
    partybranch: '第十九党支部',
    roleName:'2018年06月20日',
    menu: [
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '个人信息',
        explain: '最新通知，一键查看',
        targetPages: "/pages/organization/partyMemberFile/partyMemberFile"
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '我的收藏',
        explain: '图文收藏，快速查找',
        targetPages: "./../collection/collection"
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '党内公示',
        explain: '党内动态，即时了解',
        targetPages: "/pages/news/noticesInner/noticesInner_list/noticesInner_list"
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '我要反馈',
        explain: '反馈意见，解答疑问',
        targetPages: "./../feedback/feedback_home/feedback_home"
      }, 
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '思想汇报',
        explain: '时刻向组织汇报思想动态',
        targetPages: "./../thoughtreport/thoughtreport"
      },
      {
        imgUrls: '/images/icon_function/partyNews.png',
        descs: '历史学习',
        explain: '温故知新，数往知来',
        targetPages: "./../history/history"
      }]
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
    var that = this;
    // 验证登陆并读取缓存
    that.checkLogin();
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
  /**功能按钮跳转页面 */
  menuTargetTo: function (e) {
    console.log(e);
    var src = e.target.dataset.targeturl;
    console.log(src);
    wx.navigateTo({
      url: src
    })
  },
  checkLogin:function(){
    var that = this;
    //同步获取本地缓存
    try {
      var userInfo = wx.getStorageSync('userInfo');
      console.log(userInfo);
      var url = that.data.localUrl;
      var turnToWay = 'tabbar';
      if (!userInfo) {
        //跳转登陆页面，参数本地页面url以及跳转方式。因为navigateTo不支持跳到tabbar页面
        wx.navigateTo({
          url: '/pages/login/login?targetPage=' + url + '&turnToWay=' + turnToWay,
        })
      } else {
        that.setData({
          username: userInfo.realName,
          partybranch: userInfo.branchName,
          roleName: userInfo.roleName
        })
      }

    } catch (e) {
      // Do something when catch error
    }
  }
})