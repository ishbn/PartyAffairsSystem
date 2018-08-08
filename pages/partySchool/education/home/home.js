var time = require('../../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clear:true,//清除icon的状态
    inputVal:'',//输入框的值
    menu: "/images/partySchool_icon/menu.png", //菜单图标
    documentUrl:"../../document/document",//文档详情路径
    open:false, //下拉框的状态
    height: 0,//内容高度
    oneEducation: 410,//一个文档的高度
    labelList:[],//所有标签
    documentList:[],//所有文档
    document:{
      documentIntroduction:'',
      documentTitle:'',
      downloadTimes:'',
      filePath:'',
      updateTime:'',
      uploadUser:''
    }
  },
  //输入框显示清除按键
  showClear: function(e){
    var value = e.detail.value;
    if(value!=''){
      this.setData({
        inputVal:value,
        clear: false
      })
    }else{
      this.setData({
        clear: true
      })
    }
  },
  //清除输入框中的内容
  clearVal: function(){
    this.setData({
      inputVal:'',
      clear:true
    })
  },
  //显示下拉框
  showitem: function () {
    this.setData({
      open: !this.data.open
    });
    if (this.data.menu ==="/images/partySchool_icon/menu.png"){
      this.setData({
        menu: "/images/partySchool_icon/menu1.png"
      })
    }else{
      this.setData({
        menu: "/images/partySchool_icon/menu.png"
      })
    }
    
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    //判断是否隐藏蒙层
    if (that.data.open)
    that.hiddenShadow();
    //弹出“加载”框
    wx.showLoading({
      title: '加载中',
    })
    //检查网络状态
    that.checkNetAndDoRequest();
    //根据id获取文档
    that.getDocumentList(e.target.dataset.labelid);
    //调用隐藏加载框方法
    that.hideLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var all = '1';
    //弹出“加载”框
    wx.showLoading({
      title: '加载中',
    })
    //加载数据
    that.checkNetAndDoRequest();
    //获取所有标签
    that.getLabelList();
    //获取所有文档
    that.getDocumentList(all);
    //调用隐藏加载框方法
    that.hideLoading();
  },
  //隐藏加载框
  hideLoading: function(){
    var that = this;
    if (that.data.documentList != null && that.data.labelList != null){
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
            return;
        }

      },
    })
  },
  //获取标签集合
  getLabelList: function () {
    var that = this;
    //获取服务器地址
    var add = app.globalData.serverAddress;
    wx.request({
      url: add + 'study/get_labels.do',
      method: 'POST',
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            labelList: res.data.data
          })
        }
      },
      fail: function (res) {
        console.log('标签获取失败' + res);
      }
    })
  },
  //获取文档集合
  getDocumentList: function (id) {
    var that = this;
    //获取服务器地址
    var add = app.globalData.serverAddress;
    wx.request({
      url: add + 'study/get_study_documents_by_label_id.do',
      data: {
        label_id: [id]
      },
      method:'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200 && res.data.status == 0) {
          that.setData({
            documentList: res.data.data,
            height: [(res.data.data.length + 1) / 2] * that.data.oneEducation
          })
        }
      },
      fail: function (res) {
        console.log('文档获取失败' + res);
      }
    })
  },
  //点击蒙层恢复
  hiddenShadow: function(){
    this.setData({
      open: !this.data.open
    });
    if (this.data.menu === "/images/partySchool_icon/menu.png") {
      this.setData({
        menu: "/images/partySchool_icon/menu1.png"
      })
    } else {
      this.setData({
        menu: "/images/partySchool_icon/menu.png"
      })
    }
  },
  //跳转
  targetTo: function(e){
    var that = this;
    var self = e.target.dataset.self;
    self.filePath = encodeURIComponent(self.filePath);
    self = JSON.stringify(self)
    wx.navigateTo({
      url: that.data.documentUrl + '?data=' + self,
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