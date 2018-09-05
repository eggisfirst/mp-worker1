Page({
  data: {
    select: true,
    time: '全部',
    num: '',
    array1: [{
      message1: '您认为本公司枕头的舒适度如何？'
    }, {
      message1: "您认为本公司床垫的舒适度如何？"
    }, {
      message1: "您认为本公司床上用品的舒适度如何？"
    }
    ],
    array2: [{
      message2: '非常满意'
    }, {
      message2: '满意'
    }, {
      message2: '太高或太矮'
    }, {
      message2: '太软或太硬'
    }
    ],
    array3: [{
      message3: '80%'
    }, {
      message3: '8%'
    }, {
      message3: '2%'
    }, {
      message3: '10%'
    }],
    people:180
  },
  //点击选择类型，出现/隐藏
  showTime: function () {
    var select = this.data.select;
    if (select == true) {
      this.setData({
        select: false
      })
    } else {
      this.setData({
        select: true
      })
    }
  },
  //点击切换样式，顶部time值改变
  mySelect: function (e) {
    this.setData({
      time: e.target.dataset.me,
      num: e.target.dataset.num,
      select: true,
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  
  },
  onReady: function () {
    // 页面渲染完成
    
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
