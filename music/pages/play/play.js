const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTime: 0,
    duration2: 0,
    durationmin: 0,
    durationsen: 0,
    currentTimemin: 0,
    currentTimesen: 0,
    animation: "",
    animation2: "",
    timer: null,
    flag: true,
    value: 0,
    scrollHeigth:""
  },
  control() {
    if (this.data.flag) {
      innerAudioContext.pause();
      this.setData({
        flag: false
      })
    } else {
      innerAudioContext.play();
      this.setData({
        flag: true
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.playmp3();    
  },
  sliderChange(e) {
    this.data.value = e.detail.value;
    let currentTimemin2 = parseInt(this.data.value / 60);
    let currentTimesen2 = parseInt(this.data.value % 60);
    this.setData({
      currentTime: this.data.value,
      currentTimemin: currentTimemin2,
      currentTimesen: currentTimesen2,
      flag:false
    });
    innerAudioContext.seek(this.data.value);
    innerAudioContext.pause();
  },
  playmp3: function(currentTime) {
    var srcurl = "/audio/jj.mp3";
    innerAudioContext.autoplay = true;
    // innerAudioContext.loop = true;
    innerAudioContext.src = srcurl;
    innerAudioContext.onTimeUpdate(() => {
      let currentTime = parseInt(innerAudioContext.currentTime);
      let duration = parseInt(innerAudioContext.duration);
      // 显示分秒
      let durationmin = parseInt(this.data.duration2 / 60);
      let durationsen = parseInt(this.data.duration2 % 60);
      let currentTimemin = parseInt(this.data.currentTime / 60);
      let currentTimesen = parseInt(this.data.currentTime % 60);
      innerAudioContext.duration;
      innerAudioContext.currentTime;
      this.setData({
        currentTime: currentTime,
        duration2: duration,
        durationmin: durationmin,
        durationsen: durationsen,
        currentTimemin: currentTimemin,
        currentTimesen: currentTimesen,
      })
    })
  },
  onReady: function() {
    var animation = wx.createAnimation({
      duration: 600000,
      timingFunction: "linear",
    });
    var animation2 = wx.createAnimation({
      delay:5000,
      duration: 400000,
      timingFunction: "linear",
    });
    this.animation = animation;
    this.animation2 = animation;
    animation.rotateZ(10000).step();
    animation2.translateY(-2300).step();
    this.setData({
      animation: animation.export(),
      animation2: animation2.export()
    })
  },
  play() {
    innerAudioContext.play();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var _this = this;
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          scrollHeigth: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    innerAudioContext.pause();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

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