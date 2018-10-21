// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    month:10,
    leftDisplay:true,
    rightDisplay:false,
    upDisplay:false,
    things:[
      {
        id:'1',
        text:'MON',
        number:'09',
        content:['http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png','http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png','http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png']
      },
      {
        id:'2',
        text:'MON',
        number:'10',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      },
      {
        id:'3',
        text:'MON',
        number:'09',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      },
      {
        id:'4',
        text:'MON',
        number:'10',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      }, 
      {
        id:'5',
        text:'MON',
        number:'09',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      },
      {
        id:'6',
        text:'MON',
        number:'10',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      }
    ],
    nextData:[
      {
        id:'1',
        text:'MON',
        number:'09',
        content:['http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png','http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png','http://ouvyoji2r.bkt.clouddn.com/2018/10/3073266771.png']
      },
      {
        id:'2',
        text:'MON',
        number:'10',
        content:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
      }
    ],
    lastData:[],
    updataList:[]
  },
  //回到主页
  goIndex:function(){
    console.log('回到主页')
    wx.switchTab({
      url: '../index/index'
    })
  },
  updata:function(){
    const _this = this;
    wx.chooseImage({
      count:3,
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        _this.setData({
          updataList:tempFilePaths,
          upDisplay:true
        })
      },
    });

  },
  //打开
  openImg:function(event){
    let imgId = event.currentTarget.dataset.id;
    let data = this.data.things;
    let resutl = [];
    for(let i = 0 ;i < data.length ; i++){
      if(data[i].id == imgId){
        resutl = data[i].content;
        break;
      }
    }
    wx.previewImage({
      urls: resutl,
    })
  },
  //切换
  slider:function(event){
    let flag = event.currentTarget.dataset.flag;
    console.log(flag)
    let _this = this;
    if(flag == 'left'){
      let temp = this.data.things;
      console.log(temp)
      this.setData({
        things:_this.data.nextData,
        lastData:temp
      })
    }
    console.log(this.data.lastData)
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