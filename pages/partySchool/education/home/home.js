Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    clear:true,//清除icon的状态
    inputVal:'',//输入框的值
    menu: "/images/partySchool_icon/menu.png", //菜单图标
    open:false, //下拉框的状态
    height: 0,//swiper高度
    oneEducation: 410,//一条新闻的高度
    all:[
      {
        image: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        info: "坚持“三会一课”常态化纵深推进党组织建设",
        time: "2018-01-05",
        titleType:"党章党规"
      },
      {
        image: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        info: "落实中央八项规定精神，习近平这样说",
        time: "2017-12-01",
        titleType: "三会一课"
      },
      {
        image: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        info: "坚持“三会一课”常态化纵深推进党组织建设",
        time: "2018-01-05",
        titleType: "治党治国"
      },
      {
        image: "https://www.51zhdj.cn/html/index/images/shbanner.jpg",
        info: "落实中央八项规定精神，习近平这样说",
        time: "2017-12-01",
        titleType: "党史"
      }
    ]
  },
  //输入框显示清除按键
  showClear: function(e){
    console.log(this.data.inputVal);
    if(e.detail.value!=''){
      this.setData({
        clear: false
      })
    }else{
      this.setData({
        clear: true
      })
    }
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
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({  
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
    this.checkCor();
    if(this.data.open)
    this.hiddenShadow();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var length = this.data.all.length/2;
    var oneEducation = this.data.oneEducation;
    this.setData({
      height: oneEducation * length
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