//index.js
//获取应用实例
var localost = getApp().globalData.localost;
const app = getApp()

Page({
  data: {
    imgSrc: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    itemThumb:'https://tse4.mm.bing.net/th?id=OIP.Elyd51yliaem9DZaQjiMawHaE7&pid=Api',
    itemSrc:'http://ouvyoji2r.bkt.clouddn.com/2018/10/3245483770.png',
    itemGo:'http://ouvyoji2r.bkt.clouddn.com/2018/10/459207981.png'
  },
  sleep:function(){
    wx.showModal({
      title: '打卡',
      content: '请在规定时间打卡'
    })
  },
  camera:function(){
    console.log("camera")
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  getUserInfo:function(){
    console.log('获取年龄，坚持早睡信息，打卡信息');
    wx.login({
      success:function(e){
        if(e.code){
          wx.request({
            url: localost + '/login',
            method:'post',
            data:{
              code: e.code
            },
            success:function(e){
              console.log(e.data)
            }
          })
        }
      }
    })
  },
  onLoad: function () {
   this.getUserInfo();
  }
})
