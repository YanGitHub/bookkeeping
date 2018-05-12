//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log(res.code);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl:'http://192.168.88.216:8080',
    itemList: [
      {
        name: "服饰",
        code: "fu_shi",
        imagePath: "/images/icon/fu_shi.png"
      },
      {
        name: "餐饮",
        code: "can_yin",
        imagePath: "/images/icon/can_yin.png"
      },
      {
        name: "住房",
        code: "zhu_fang",
        imagePath: "/images/icon/zhu_fang.png"
      },
      {
        name: "交通",
        code: "jiao_tong",
        imagePath: "/images/icon/jiao_tong.png"
      },
      {
        name: "购物",
        code: "gou_wu",
        imagePath: "/images/icon/gou_wu.png"
      },
      {
        name: "孩子",
        code: "hai_zi",
        imagePath: "/images/icon/hai_zi.png"
      },
      {
        name: "长辈",
        code: "zhang_bei",
        imagePath: "/images/icon/zhang_bei.png"
      },
      {
        name: "办公",
        code: "ban_gong",
        imagePath: "/images/icon/ban_gong.png"
      },
      {
        name: "彩票",
        code: "cai_piao",
        imagePath: "/images/icon/cai_piao.png"
      },
      {
        name: "宠物",
        code: "chong_wu",
        imagePath: "/images/icon/chong_wu.png"
      },
      {
        name: "还款",
        code: "huan_kuan",
        imagePath: "/images/icon/huan_kuan.png"
      },
      {
        name: "居家",
        code: "ju_jia",
        imagePath: "/images/icon/ju_jia.png"
      },
      {
        name: "捐赠",
        code: "juan_zeng",
        imagePath: "/images/icon/juan_zeng.png"
      },
      {
        name: "礼金",
        code: "li_jin",
        imagePath: "/images/icon/li_jin.png"
      },
      {
        name: "礼物",
        code: "li_wu",
        imagePath: "/images/icon/li_wu.png"
      },
      {
        name: "零食",
        code: "ling_shi",
        imagePath: "/images/icon/ling_shi.png"
      },
      {
        name: "旅行",
        code: "lv_xing",
        imagePath: "/images/icon/lv_xing.png"
      },
      {
        name: "美容",
        code: "mei_rong",
        imagePath: "/images/icon/mei_rong.png"
      },
      {
        name: "汽车",
        code: "qi_che",
        imagePath: "/images/icon/qi_che.png"
      },
      {
        name: "社交",
        code: "she_jiao",
        imagePath: "/images/icon/she_jiao.png"
      },
      {
        name: "书籍",
        code: "shu_ji",
        imagePath: "/images/icon/shu_ji.png"
      },
      {
        name: "数码",
        code: "shu_ma",
        imagePath: "/images/icon/shu_ma.png"
      },
      {
        name: "通讯",
        code: "tong_xun",
        imagePath: "/images/icon/tong_xun.png"
      },
      {
        name: "维修",
        code: "wei_xiu",
        imagePath: "/images/icon/wei_xiu.png"
      },
      {
        name: "学习",
        code: "xue_xi",
        imagePath: "/images/icon/xue_xi.png"
      },
      {
        name: "医疗",
        code: "yi_liao",
        imagePath: "/images/icon/yi_liao.png"
      },
      {
        name: "娱乐",
        code: "yu_le",
        imagePath: "/images/icon/yu_le.png"
      },
      {
        name: "运动",
        code: "yun_dong",
        imagePath: "/images/icon/yun_dong.png"
      }
    ]
  }
})