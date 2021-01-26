// pages/nation/nation.js
// const canvasId = 'my-canvas'
// const mul = 1
const mul = 4
const canvasId = 'myCanvas'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 判断用户是否授权
    authorized: false,
    avatar: "/images/avatarBg.png",
    // 当前的icon图标
    currentIcon: '',
    // 当前的位置
    currentPositon: 3,
    iconList: [`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-6d920042-7006-4b7f-b228-923931a2c0a0.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-7f22c0d0-92fd-4301-a023-ce61fb35cb69.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-53993706-4feb-4950-8870-b2d9624a9c44.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-1103c8f5-260c-4938-800d-e899a703e485.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-aabbbb87-a6ee-4dde-b48e-afad730e52a3.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-0b7760d9-0659-4523-8943-f50866f141be.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-95e8a97f-e863-41a3-9c2b-eb222ed4f701.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-1899511b-6bf2-4f29-b447-6339052182f7.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-dc302a13-aa94-45c8-a87f-4d7875ad0490.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-77df68d5-337e-44ff-b49f-11ad8265b938.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-af08a1e5-9e7d-496f-805e-4a50fb7a84f0.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-3127b95e-13a0-4f7a-9d66-caa3b3744d98.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-4e8b9275-1652-46f4-b4bd-2938ef912789.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl2/1077-42fd3eff-4ea4-430d-83a8-49dd597b4998.png`,`https://swz-common-files.oss-cn-shenzhen.aliyuncs.com/VimMaintenanceRecord/maintenanceChecklistUrl1/1077-b3bf2498-ddb5-40ca-9de8-583d045ead4b.png`,],
    photo: true,
    customModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getIconList()
    this.userAuthorized()
  },

  // getIconList() {
  //   let that = this
  //   wx.promisify('request')({ url: 'https://linlishe-1259653897.cos.ap-guangzhou.myqcloud.com/icon.json' }).then(res => {
  //     console.log("iconList", res.data)
  //     that.setData({
  //       iconList: res.data
  //     })
  //   })
  // },

  /**
   * 选择本地文件
   */
  // uploadLocalImage() {
  //   let that = this
  //   wx.promisify('chooseImage')({
  //     count: 1
  //   }).then(chooseRes => {
  //     console.log({ chooseRes })
  //     that.setData({
  //       avatar: chooseRes.tempFilePaths[0]
  //     })
  //   })
  // },
  /**
   * 用户是否已经授权
   */
  userAuthorized() {
    let that = this
    wx.promisify('getSetting')().then(setRes => {
      if (setRes.authSetting['scope.userInfo']) {
        wx.promisify('getUserInfo')().then(infoRes => {
          // 处理头像
          let avatar = infoRes.userInfo.avatarUrl
          let stringArray = avatar.split('/')
          stringArray.pop()
          stringArray.push('0')
          avatar = stringArray.join('/');
          that.setData({
            avatar: avatar,
            authorized: true
          })
        })
      } else {
        that.setData({
          authorized: false
        })

      }
    })
  },
  onSuccessOpenSetting() {
    this.setData({
      photo: true
    })
  },

  customModalCancel() {
    this.setData({
      customModal: false
    })
  },

  onGetUserInfo() {
    this.userAuthorized()
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
    console.log('share')
    this.setData({
      customModal: false
    })
  },

  chooseIcon(event) {
    let icon = event.currentTarget.dataset.image
    console.log({
      icon
    })
    this.setData({
      currentIcon: icon,
      currentPositon: 3
    })
  },
  longpress(event) {
    console.log("event",event);
    let icon = event.currentTarget.dataset.image
    wx.previewImage({
      current: icon, // 当前显示图片的http链接
      urls: [icon] // 需要预览的图片http链接列表
    })
  },

  choosePosition(event) {
    let that = this
    if (!that.data.currentIcon) {
      wx.showToast({
        title: '请先选择图标',
        icon: 'none'
      })
      return false
    }
    let position = event.currentTarget.dataset.position
    that.setData({
      currentPositon: position
    })
  },

  saveImage() {
    let that = this
    let currentIcon = that.data.currentIcon
    if (!currentIcon) {
      wx.showToast({
        title: '请先选择图标',
        icon: 'none'
      })
      return false
    }
    wx.showLoading({
      title: '正在制作...'
    })
    that.canvasDrawImage((image) => {
      wx.promisify('getSetting')().then(setRes => {
        if (setRes.authSetting['scope.writePhotosAlbum'] !== false) {
          wx.promisify('saveImageToPhotosAlbum')({
            filePath: image
          }).then(() => {
            wx.showToast({
              title: '保存成功'
            })
            that.setData({
              customModal: true
            })
          }).catch(e => {
            that.setData({
              photo: false
            })
          })
        }
      })

    })

    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
    console.log('开始画图')
  },


  canvasDrawImage(callback) {
    let that = this
    // 获取两个数据
    let icon = that.data.currentIcon,
      avatar = that.data.avatar,
      position = that.data.currentPositon

    // 下载图标，获取头像信息
    wx.promisify('downloadFile')({
      url: icon
    }).then(iconRes => {
      // src: avatar.replace('https://thirdwx.qlogo.cn', 'https://wx.qlogo.cn')
      wx.promisify('getImageInfo')({
        src: avatar.replace('https://thirdwx.qlogo.cn', 'https://wx.qlogo.cn')
      }).then(avatarRes => {
        let tempAvatar = avatarRes.path
        let tempIcon = iconRes.tempFilePath
        that.__picture(tempIcon, tempAvatar, position, (image) => {
          return callback(image)
        })
      })
    })
  },

  __picture(tempIcon, tempAvatar, position, callback) {
    const screenWidth = wx.getSystemInfoSync().screenWidth
    // 其中 * 4 是我们canvas画大图
    const multiple = parseFloat(screenWidth / 750) * mul
    const ctx = wx.createCanvasContext(canvasId, this)
    ctx.setFillStyle('#ffffff')
    ctx.fillRect(0, 0, 300 * multiple, 300 * multiple)
    ctx.save() //保存之前状态，便于画完圆继续使用
    roundedRect(ctx, 0 * multiple, 0 * multiple, 300 * multiple, 300 * multiple, 30 * multiple)
    ctx.clip()
    ctx.drawImage(tempAvatar, 0 * multiple, 0 * multiple, 300 * multiple, 300 * multiple)
    ctx.restore()
    // 一下300就是300rpx
    let iconSizeW = 80
    let iconSizeH = 80

    let dx = 0,
      dy = 0,
      dw = iconSizeW,
      dh = iconSizeH
    switch (parseInt(position)) {
      case 0:
        dx = 0, dy = 0
        break;
      case 1:
        dx = 190, dy = 0
        break;
      case 2:
        dx = 0, dy = 190
        break;
      case 3:
        dx = 218, dy = 218
        break;
    }
    ctx.drawImage(tempIcon, dx * multiple, dy * multiple, dw * multiple, dh * multiple)

    ctx.draw(false, () => {
      // 保存图片
      wx.promisify('canvasToTempFilePath')({
        canvasId: canvasId,
        x: 0,
        y: 0,
        width: 300 * multiple,
        height: 300 * multiple,
        destWidth: 600 * multiple,
        destHeight: 600 * multiple
      }).then(info => {
        console.log({
          info
        })
        return callback(info.tempFilePath)
      })
    })
  },


})

/**
 * 画四边圆角
 */
const roundedRect = (ctx, x, y, width, height, radius) => {
  ctx.strokeStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.stroke();
}