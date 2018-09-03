// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  vipIn(){
    wx.navigateTo({
      url: `../../pages/index/index`
    })
  },
  reportFormsIn(){
    wx.navigateTo({
      url: `../../pages/reportForms/reportForms`
    })
  }
})