// pages/reportForms/reportForms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  exPavilion(){
    wx.navigateTo({
      url: `../../pages/exPavilion/exPavilion`
    })
  },
  hotel(){
    wx.navigateTo({
      url: `../../pages/hotel/hotel`
    })
  }
})