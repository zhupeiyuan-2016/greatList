// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    month:10,
    data:[
      {
        text:'TUE',
        number:'09'
      },
      {
        text:'WED',
        number:'10'
      },
      {
        text:'THU',
        number:'11'
      },
      {
        text:'FRI',
        number:'12'
      },
      {
        text:'SAT',
        number:'13'
      },
      {
        text:'SUN',
        number:'14'
      },
      {
        text:'MON',
        number:'15'
      }
    ],
    things:[
      {
        date:'09',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      },
      {
        date:'10',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      }
    ]
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.index + 1}`,
      icon: 'none'
    });
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