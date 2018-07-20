// pages/organization/vote/vote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    r_value: "", //选中的单选票
    r_modalcontent: "", //选中的单选内容
    c_value: [""], //选中的多选票

    theme: "关于2018年正式党员的考核选举",
    description: "大家快点来投出自己神圣的一票吧",
    radioShow: false,
    checkboxShow: false,
    r_iscarryout: false,
    r_btnvote: false,
    c_iscarryout: false,
    c_btnvote: false,
    btnnews: "确认投票",

    r_showcontent: [{
        name: "a",
        value: "啊哈哈哈哈啊哈哈哈哈啊哈哈哈哈"
      },
      {
        name: "b",
        value: "啊哈哈哈"
      },
      {
        name: "c",
        value: "啊哈哈"
      },
      {
        name: "d",
        value: "啊哈"
      }
    ],
    c_showcontent: [{
      name: "1",
      value: "123456789"
    },
    {
      name: "2",
      value: "12345678944"
    },
    {
      name: "3",
      value: "11111"
    },
    {
      name: "4",
      value: "12121"
    }
    ]



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
   * 单选事件
   */
  radioChange: function(e) {
    //console.log(e);
    var value = e.detail.value;
    this.setData({
      r_value: value
    });
    console.log("单选内容" + this.data.r_value);
  },
  /**
   * 单选确认投票
   */
  confirmvote: function() {
    var that = this;
    wx.showModal({
      title: '你选择的是',
      content: this.data.r_modalcontent,
      success: function(res) {
        if (res.confirm) {
          that.setData({
            r_iscarryout: true,
            r_btnvote: true,
            btnnews: "完成投票"
          });
          console.log('用户选择完毕')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  /**
   * 通过这个事件取得对应的显示内容
   */
  catchhere: function(e) {
    var content = e.currentTarget.dataset.v;
    this.setData({
      r_modalcontent: content
    })
  },
  /**
   * 多选事件
   */
  checkboxChange: function(e){
    var value = e.detail.value;
    this.setData({
      c_value: value
    });
    console.log("多选内容"+this.data.c_value);
  },
  /**
   * 多选确认投票
   */
  confirmvote2: function(){
    var that = this;
    wx.showModal({
      title: '确定所选内容吗',
      content: '',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            c_iscarryout: true,
            c_btnvote: true,
            btnnews: "完成投票"
          });
          console.log('用户多选完毕')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})