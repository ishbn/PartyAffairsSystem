// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    broadcast: [
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
      'https://www.51zhdj.cn/html/index/images/shbanner.jpg'
    ],
    menu: {
      imgUrls: [
        '/images/icon_function/file.png',
        '/images/icon_function/partyClass.png',
        '/images/icon_function/threeOne.png',
        '/images/icon_function/taskManagement.png',
        '/images/icon_function/notice.png',
        '/images/icon_function/partyNews.png',
        '/images/icon_function/examination.png',
        '/images/icon_function/thoughtReport.png',
        '/images/icon_function/taskManagement.png',
        '/images/icon_function/more.png'
      ],
      descs: [
        '党员档案',
        '微党课',
        '三会一课',
        '专题教育',
        '我的通知',
        '党建要闻',
        '在线考试',
        '思想汇报',
        '任务管理',
        '分类'
      ]
    },
    list_news:[
      {
        news_id:1,
        title:"在习近平党建思想指引下实干担当",
        date:'2018-07-11',
        image:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      },
      {
        news_id: 2,
        title: "如何增强抓落实的本领？",
        date: '2018-07-11',
        image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
      }
    ],
  list_notices: [
    {
      notice_id:0,
      title: "在习近平党建思想指引下实干担当",
      date: '2018-07-11',
      image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
    },
    {
      notice_id:1,
      title: "如何增强抓落实的本领？",
      date: '2018-07-11',
      image: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
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
  
  }
})