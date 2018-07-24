Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,//点赞出现效果
    colShow:true,//收藏出现效果
    cancelShow:true,//取消点赞效果
    colCancelShow:true,//取消收藏效果
    praise:"/images/partySchool_icon/zan.png",//点赞图标
    collect:"/images/partySchool_icon/collect.png"//收藏图标
  },
  //点赞
  addOne: function(){
    if (this.data.praise =="/images/partySchool_icon/zan.png"){
    this.setData({
      praise:"/images/partySchool_icon/zan1.png",
      show: !this.data.show
    });
    setTimeout(function () {
      this.setData({
        show: !this.data.show
      });
    }.bind(this), 1000)
    }
    else{
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
    
  }
})