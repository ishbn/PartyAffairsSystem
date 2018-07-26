// pages/partySchool/partyClass/selectClass/details/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate: true, //箭头状态 true向下 false向上
    content: '全部',//当前是哪种课程
    checked1: false,//"全部"是否被选中
    checked2: true,//"党章党规"是否被选中
    checked3: false,//"习近平讲话"是否被选中
    checked4: false,//"十九大精神"是否被选中
    list: {//标签
      law: [
        "全部", "党章", "准则", "条例", "规则", "规定", "办法", "细则"
      ],
      presidentXi: [
        "全部", "系列讲话", "从严治党", "新时代", "治国理论", "依法治国", "中国梦"
      ],
      nineteen: [
        "全部", "报告", "决议"
      ]
    },
    allClass:[
      {
        img:'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
        title:'关于新形势下党内政治生活的若干准则',
        text: '《关于新形势下党内政治生活的若干准则》，是为了更好进行具有许多新的历史特点的伟大斗争、推进党的建设新的伟大工程、推进中国特色社会主义伟大事业，经受“四大考验”、克服“四种危险”，由党的十八届六中全会制定的一部新形势下党内政治生活的准则。2016年10月27日，《关于新形势下党内政治生活的若干准则》由中国共产党第十八届中央委员会第六次全体会议通过，自2016年11月2日全文发布实行。',
        people:'250',
        classType:'law'
      },
      {
        img: 'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
        title: '中国共产党第十九次全国代表大会关于《中国共产党章程（修正案）》的决议',
        text: '党的十九大闭幕会通过了关于《中国共产党章程（修正案）》的决议，号召党的各级组织和全体党员在以习近平同志为核心的党中央坚强领导下，高举中国特色社会主义伟大旗帜，以马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、习近平新时代中国特色社会主义思想为指导，更加自觉地学习党章、遵守党章、贯彻党章、维护党章，坚持和加强党的全面领导，坚持党要管党、全面从严治党，为决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦、实现人民对美好生活的向往继续奋斗',
        people: '250',
        classType: 'nineteen'
      },
      {
        img: 'https://www.51zhdj.cn/html/index/images/shbanner.jpg',
        title: '习近平总书记系列重要讲话读本（2016年版）',
        text: '本书围绕实现中华民族伟大复兴的中国梦、坚持和发展中国特色社会主义，围绕协调推进全面建成小康社会、全面深化改革、全面依法治国、全面从严治党“四个全面”战略布局，围绕牢固树立创新、协调、绿色、开放、共享的发展理念，统筹推进经济、政治、文化、社会、生态文明五位一体建设，围绕加强国防和军队建设，推动构建以合作共赢为核心的新型国际关系，学习掌握科学的思想方法和工作方法等十六个专题，全面准确深入阐释了以习近平同志为核心的党中央治国理政新理念新思想新战略。',
        people: '250',
        classType: 'presidentXi'
      }
    ]
  },
  //点击出现下拉菜单
  clickTap: function(){
    this.setData({
      rotate:!this.data.rotate
    });
  },
  //点击显示右边标签
  checkTap: function(e){
    if(e.currentTarget.dataset.current==1){
      this.setData({
        checked1:true,
        checked2: false,
        checked3: false,
        checked4: false,
        rotate: !this.data.rotate,
        content:'全部'
      });
    } else if (e.currentTarget.dataset.current == 2){
      this.setData({
        checked1: false,
        checked2: true,
        checked3: false,
        checked4: false
      });
    } else if (e.currentTarget.dataset.current == 3){
      this.setData({
        checked1: false,
        checked2: false,
        checked3: true,
        checked4: false
      });
    }else{
      this.setData({
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: true
      });
    }
  },
  //选择具体分类
  checked: function(e){
    if(e.currentTarget.dataset.self=="全部"){
      var content = e.currentTarget.dataset.father;
      this.setData({
        content: content,
        rotate: true
      });
    }else{
      var content = e.currentTarget.dataset.self;
      this.setData({
        content: content,
        rotate: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var e = JSON.parse(options.e);
    this.checked(e);
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