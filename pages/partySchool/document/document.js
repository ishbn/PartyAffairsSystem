var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,//点赞出现效果
    colShow: true,//收藏出现效果
    cancelShow: true,//取消点赞效果
    colCancelShow: true,//取消收藏效果
    clickAdd: true,//点赞是否可点击
    clickCol: true,//收藏是否可点击
    praise: "/images/partySchool_icon/zan.png",//点赞图标
    collect: "/images/partySchool_icon/collect.png",//收藏图标
    documentList:[],//文档
    num:'',//当前文档的数组下标
    pre:'',//上一篇索引
    next:''//下一篇索引
  },
  //点赞
  addOne: function (e) {
    this.addWay(this);
    if (this.data.praise == "/images/partySchool_icon/zan.png") {
      this.setData({
        praise: "/images/partySchool_icon/zan1.png",
        show: !this.data.show
      });
      setTimeout(function () {
        this.setData({
          show: !this.data.show
        });
      }.bind(this), 1000)
    }
    else {
      this.setData({
        praise: "/images/partySchool_icon/zan.png",
        cancelShow: !this.data.cancelShow
      });
      setTimeout(function () {
        this.setData({
          cancelShow: !this.data.cancelShow
        });
      }.bind(this), 1000)
    }
  },
  //收藏
  colOne: function () {
    this.colWay(this);
    if (this.data.collect == "/images/partySchool_icon/collect.png") {
      this.setData({
        collect: "/images/partySchool_icon/collect1.png",
        colShow: !this.data.colShow
      });
      setTimeout(function () {
        this.setData({
          colShow: !this.data.colShow
        });
      }.bind(this), 1000)
    }
    else {
      this.setData({
        collect: "/images/partySchool_icon/collect.png",
        colCancelShow: !this.data.colCancelShow
      });
      setTimeout(function () {
        this.setData({
          colCancelShow: !this.data.colCancelShow
        });
      }.bind(this), 1000)
    }
  },
  //点赞延迟一秒点击
  addWay: function (self) {
    self.setData({
      clickAdd: false
    })
    setTimeout(function () {
      self.setData({
        clickAdd: true
      })
    }, 1000)
  },
  //收藏延迟一秒点击
  colWay: function (self) {
    self.setData({
      clickCol: false
    })
    setTimeout(function () {
      self.setData({
        clickCol: true
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;
    var index = parseInt(options.index);
    var docList = JSON.parse(options.data);
    for (var i = 0; i < docList.length; i++) {
      docList[i].filePath = decodeURIComponent(docList[i].filePath);
    }
    //弹出“加载”框
    console.log(docList);
    console.log(index);
    wx.showLoading({
      title: '加载中',
    })
    that.setData({
      documentList:docList,
      num:index,
      pre:index-1,
      next:index+1
    })
    console.log(index);
    //调用隐藏加载框方法
    that.hideLoading();
  },
  //隐藏加载框
  hideLoading: function () {
    var that = this;
    if (that.data.documentList != null) {
      setTimeout(function () {
        wx.hideLoading()
      }, 250)
    }
  },
  //跳转
  targetTo: function(e){
    var that = this;
    var data = e.target.dataset.list;
    var index = e.target.dataset.index;
    for (var i = 0; i < data.length; i++) {
      data[i].filePath = encodeURIComponent(data[i].filePath);
    }
    data = JSON.stringify(data);
    wx.redirectTo({
      url: './document?data='+data+'&index='+index,
    })
  },
  //下载文件
  downloadFile: function(e){
    var url = e.target.dataset.url;
    wx.downloadFile({
      url:url,
      success: function(res){
        var filePath = res.tempFilePath;
        wx.saveFile({
          tempFilePath: filePath,
          success: function(res){
            // wx.getSavedFileList({
            //   success: function(res){
            //     console.log(res.fileList);
            //   }
            // })
            console.log('文件保存成功');
          },
          fail: function(res){
            console.log('文件保存失败');
          }
        })
        wx.openDocument({
          filePath: filePath,
          success: function(res){
            console.log('打开文档成功');
          },
          fail: function(res){
            console.log('打开文档失败');
          }
        })  
      },
      fail: function(res){
        console.log('文档下载失败');
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