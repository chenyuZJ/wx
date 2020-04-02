Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      "../../img/banner01.jpg",
      "../../img/banner02.jpg",
      "../../img/banner03.jpg",
      "../../img/banner04.jpg",
      "../../img/banner05.jpg"
    ],
    radioList: [{
      "picUrl": "../../img/radio01.jpg",
      "text": "热歌",
    }, {
      "picUrl": "../../img/radio02.jpg",
      "text": "一人一首招牌歌",
    }],
    songList: [{
      "text1": "催泪大杀器！盘点演唱会经典万人大合唱",
      "picUrl": "../../img/song01.jpg",
      "num": 9927141,
      "text2": "金青松"
    }, {
      "text1": "纳尼？这些华语歌手竟然会唱日语歌！",
      "picUrl": "../../img/song02.jpg",
      "num": 675463,
      "text2": "风吹草地"
    }, {
      "text1": "精选内地十大民谣歌手代表作",
      "picUrl": "../../img/song03.jpg",
      "num": 1295560,
      "text2": "１'s   ヽ"
    }, {
      "text1": "2016billboard嘻哈榜",
      "picUrl": "../../img/song04.jpg",
      "num": 1161101,
      "text2": "2016billboard嘻哈榜"
    }, {
      "text1": "浮光掠影：ACG纯音乐赏析合辑",
      "picUrl": "../../img/song05.jpg",
      "num": 998181,
      "text2": "黎桐同"
    }, {
      "text1": "trip-hop单曲大推荐",
      "picUrl": "../../img/song06.jpg",
      "id": "3482605622",
      "num": 357712,
      "text2": "哑忍"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  getgedan(){
    wx.redirectTo({
      url: '/pages/gedan/gedan'
    })
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

  }
})