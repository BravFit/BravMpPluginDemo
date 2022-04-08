// plugin/components/Measure/index.js


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    themeColor: {
      type: String,
      value: "#01ca9e",
    },
    bleState: {
      type: String,
      value: "空闲"
    },
    realTimeWeight: {
      type: Number,
      value: 0
    },
    state: {
      type: String,
      value: "paused"
    },
    hideNameDes: {
      type: Boolean,
      value: false
    },
    unit: {
      type: String,
      value: 'kg'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    measure_time_string: "",
    time_string: "",
    animationData: {}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickRestartScan() {
      let animation = wx.createAnimation({
        duration: 800,
        timingFunction: "ease-out"
      })
      animation.rotate(360).step()
      this.setData({ animationData: animation.export() })
      this.triggerEvent("restart")
    },
    transitionend() {
      let animation = wx.createAnimation({
        duration: 0
      })
      animation.rotate(0).step()
      this.setData({ animationData: animation.export() })
    }
  }
})
