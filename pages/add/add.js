 // pages/add/add.js
Page({
  amountInput:function(e){
    this.setData({
      money: e.detail.value
    })
  },
  noteInput: function (e) {
    this.setData({
      note: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    //用户输入金额
    money:'',
    //用户输入的备注
    note:'',
    selectedIndex:0,
    itemList: getApp().globalData.itemList
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

  },
  showModalStatus:false,
  //显示对话框
  showModal: function (e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    this.setData({selectedIndex:index});
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  }, 
  move: function () { 

  },
  addRecord:function(e){
    var amount = this.data.money;
    var note = this.data.note;
    var subjectCode = this.data.itemList[this.data.selectedIndex].code;
    var subjectName = this.data.itemList[this.data.selectedIndex].name;
    var imagePath = this.data.itemList[this.data.selectedIndex].imagePath;
    var userId = 0;
    var spendType = e.currentTarget.dataset.spendType;
    wx.request({
      url: getApp().globalData.baseUrl + '/api/1/1/insert', 
      method:'POST',
      data: {
        subjectCode:subjectCode,
        subjectName:subjectName,
        userId:userId,
        type:spendType,
        amount:amount,
        note:note,
        imagePath: imagePath
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    });
    //关闭弹窗
    this.hideModal();
  }
})