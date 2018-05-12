var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-05-11',
    time: '12:00:00',
    year: '2018',
    yearName: '2018年',
    month: "05",
    monthName: '05月',
    income:'0.00',
    payout:'0.00',
    multiIndex: [0, 0],
    //返回明细列表
    detailList: []    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.reloadDetail()
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var date = util.formatDate(new Date);
    var year = util.getYear(new Date);
    var month = util.getMonth(new Date);
    this.setData({
      date:date,
      year: year,
      month: month,
      yearName: year + "年",
      monthName: month + "月"
    });
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
    this.reloadDetail();
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
  reloadDetail: function(){
    var that = this;
    // 显示顶部刷新图标  
    wx.showNavigationBarLoading();  
    wx.request({
      url: getApp().globalData.baseUrl + '/api/1/1/spendsByDate',
      method: 'POST',
      data: {
        pageSize: 10000,
        currentPage: 1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          detailList: res.data.data
        });
        // 隐藏导航栏加载框  
        wx.hideNavigationBarLoading();
        // 停止下拉动作  
        wx.stopPullDownRefresh(); 
      }
    });
  }
})