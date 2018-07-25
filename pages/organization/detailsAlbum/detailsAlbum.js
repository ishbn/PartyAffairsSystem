// pages/organization/detailsAibum/detailsAlbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverimg: "https://www.zqu.edu.cn/_mediafile/zquwww/2018/07/13/2d09sy3ajl.jpg",
    title: "肇庆学院智慧党建系统建设完成肇庆学院智慧党建系统建设完成",
    description: "可肇庆学院智慧党建系统建设完成肇庆学院智慧党建系统建设完成根据韩国和机会很久很久机会很久很久刚回家机机会很久很久刚回家机会很久很久刚回家会很久很久刚回家刚回家",
    num: 4,
    photowalls: {
      photos: [
        "https://www.zqu.edu.cn/_mediafile/zquwww/2018/07/13/2d09sy3ajl.jpg",
        "/images/album/wallpaper.jpg"
      ],
      description: [
        "第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片ddsds第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片ddsds",
        "第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片"
      ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id);
    // 向服务器请求该id的详情与所有照片
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 照片预览与放大
   */
  seeme: function(e) {
    var currentimg = e.currentTarget.dataset.src;
    var imgs = this.data.photowalls.photos;
    wx.previewImage({
      current: currentimg, //http链接才有效，否则无法加载
      urls: imgs
    })
  }
})