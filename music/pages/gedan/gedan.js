Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:2,
        title:"淘汰",
        title2:"陈奕迅",
      },
      {
        id:3,
        title:"你的爱情",
        title2:"逃跑计划",
      },
      {
        id:4,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:5,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:6,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:7,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:8,
        title:"简单爱",
        title2:"周杰伦",
      },
      {
        id:9,
        title:"简单爱",
        title2:"周杰伦",
      },
    ]
  },
  playAll(){
    wx.setStorageSync('sing', '/audio/jj.mp3')
    wx.switchTab({
      url: "/pages/play/play"
    })
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