// index.ts
import BravLibType from '../../lib/bravlib/types/typings';
const BravPlugin = requirePlugin('brav-lib');
const { BravApiProvider, BravScaleDataImpl } = BravPlugin;

import ReportBuilder from '../../report/ReportBuilder';
import { ReportItem } from '../../report/typings';

// 获取应用实例
const app = getApp<IAppOption>();

const i18nJson = require('./en.js');

type MeasurePageData = {
  age: number;
  gender: BravLibType.BravGender;
  height: number;
  measureData: ReportItem[];
  connected: boolean;
  state: 'paused' | 'running';
  realTimeWeight: number;
  themeColor: string;
};

type MeasurePage = {
  data: MeasurePageData;
  deviceHandler: BravLibType.BravDeviceHandler | undefined;
  bleApi: BravLibType.BravBleApi;
  doStartScan: () => void;
  mockReportData: () => void;
  updateState: (state: string) => void;
  checkPermission: () => Promise<boolean>;
} & WechatMiniprogram.Page.DataOption;

Page({
  data: {
    age: 30,
    // 1 男 0 女
    gender: 'Male',
    height: 170,
    unit: 'kg',
    realTimeWeight: 0,
    score: 0,
    bleState: '空闲',
    state: 'paused',
    measureData: [],
    connected: false,
    themeColor: '#4BAFEA',
  } as MeasurePageData,

  bleApi: BravApiProvider.sharedBleApi,
  // deviceHandler: undefined as unknown as BravLibType.BravDeviceHandler,
  connecting: false,
  deviceHandler: undefined,
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad() {
    wx.setNavigationBarTitle({ title: '百乐富测脂' });
    wx.setNavigationBarColor({
      backgroundColor: this.data.themeColor,
      frontColor: '#ffffff',
    });

    this.bleApi = BravApiProvider.sharedBleApi;
    this.bleApi.bleEventDelegate = this.bleEventListener();
    setTimeout(() => {
      this.doStartScan();
    }, 1000);

    this.mockReportData();
  },

  mockReportData() {
    const user = {
      height: 158,
      gender: 'Male',
      age: 30,
    } as BravLibType.BravScaleUser;

    const originData = {
      weight: 70,
      impedance: 500,
    } as BravLibType.BravScaleOriginData;
    const scaleData = new BravScaleDataImpl(user, originData);
    console.log('测量数据为：', scaleData);
    const report = new ReportBuilder(scaleData, {
      targetWeightUnit: 'kg',
      i18n: i18nJson,
      reportType: 'asia',
    }).build();

    this.setData({
      measureData: report.reportItemList,
      realTimeWeight: originData.weight,
    });
  },

  async doStartScan() {
    const hasPermission = await this.checkPermission();
    if (!hasPermission) {
      return;
    }
    const result = await this.bleApi.startScan({});
    if (result.isSuccess) {
      this.updateState('蓝牙正在扫描，请上秤');
    } else {
      this.updateState('扫描失败');
    }
  },

  //检查各个权限是否正常
  async checkPermission() {
    const systemInfo = await wx.getSystemInfo();
    const appAuthorizeSetting = wx.getAppAuthorizeSetting();
    if (systemInfo.platform === 'ios') {
      if (appAuthorizeSetting.bluetoothAuthorized === 'denied') {
        //微信获得系统的蓝牙授权
        this.updateState('IOS未获得系统蓝牙权限');
        return false;
      }
    } else if (systemInfo.platform === 'android') {
      if (appAuthorizeSetting.locationAuthorized === 'denied') {
        this.updateState('Android未获得系统定位权限，无法使用蓝牙');
        return false;
      } else if (appAuthorizeSetting.locationAuthorized === 'authorized') {
        const systemSetting = wx.getSystemSetting();
        if (!systemSetting.locationEnabled) {
          //系统定位服务未启动，
          this.updateState('安卓未打开定位开关，无法使用');
          return false;
        }
      }
    } else {
      this.updateState('暂不支持该系统');
      return false;
    }

    const authSetting = (await wx.getSetting({})).authSetting;
    console.log('获取到的权限为：', appAuthorizeSetting, authSetting);
    if (!authSetting['scope.bluetooth']) {
      //没有蓝牙权限，则向用户申请
      try {
        await wx.authorize({ scope: 'scope.bluetooth' });
        console.log('授权成功');
      } catch (e) {
        //授权失败
        this.updateState('微信蓝牙权限授权失败');
        return false;
      }
    }
    return true;
  },

  async handlerConnect(device: BravLibType.BravDevice) {
    const { height, gender, age, connected } = this.data;
    if (this.connecting || connected) {
      console.log('当前正在连接，不再处理');
      return;
    }
    this.connecting = true;
    const birthday = new Date();
    birthday.setFullYear(birthday.getFullYear() - age);
    const user = {
      height,
      gender,
      age: 30,
    } as BravLibType.BravScaleUser;

    /**
     * 调用连接成功后，会返回本次连接的设备访问对象，可以对设备进行一些蓝牙数据通讯
     * 每次连接返回的都不一样，连接成功后，该对象开始可以操作，连接失败或断开后，该对象会失效
     */
    console.log('要连接的对象', device.deviceId);
    let ret = await this.bleApi.connectDevice(
      device.deviceId,
      { user, unit: 'kg' },
      this.deviceEventListener()
    );
    if (ret.isSuccess) {
      this.deviceHandler = ret.data as BravLibType.BravDeviceHandler;
    }

    console.log('设备方位对象为：', this.deviceHandler);
  },
  bleEventListener() {
    const onBravDeviceFound = (device: BravLibType.BravDevice) => {
      // console.log('发现设备：', device);
      this.handlerConnect(device);
    };
    /**
     * 监听蓝牙状态发生变化回调，连接成功或断开连接都会出触发
     */
    const onBleEnableStateChange = (state: BravLibType.BravBleEnableState) => {
      if (state === 'Enable') {
        this.updateState('蓝牙可用，空闲');
        this.doStartScan();
      } else {
        this.updateState('蓝牙不可用');
      }
      this.setData({
        available: state === 'Enable',
        state: 'paused',
      });
    };

    /**
     * 	监听设备连接成功回调
     */
    const onConnectionChange = (
      deviceId: string,
      state: BravLibType.BravDeviceConnectionState
    ) => {
      console.log('设备连接状态变化', deviceId, state);
      // this.connecting = false;
      const connected = state === 'Connected';
      this.updateState(connected ? '已连接' : '未连接');
      this.setData({
        connected,
        state: connected ? 'running' : 'paused',
      });
    };
    return {
      onBravDeviceFound,
      onBleEnableStateChange,
      onConnectionChange,
    };
  },
  deviceEventListener() {
    /**
     * 实时测量体重
     */
    const onGetUnsteadyWeight = (deviceId: string, weight: number) => {
      this.updateState('测量中');
      this.setData({
        realTimeWeight: weight,
        state: 'running',
        unit: 'kg',
      });
    };
    /**
     * 获取到了实时的稳定测量数据，在连接APP的情况下，进行测量，数据会进入到这个回调
     * @param {object} measure 体脂秤测量数据
     */
    const onMeasureComplete = (
      deviceId: string,
      scaleData: BravLibType.BravScaleData
    ) => {
      this.updateState('测量完成');

      console.log('测量结束~~', scaleData);
      const report = new ReportBuilder(scaleData, {
        targetWeightUnit: 'kg',
        i18n: i18nJson,
        reportType: 'asia',
      }).build();

      this.setData({
        state: 'paused',
        measureData: report.reportItemList,
      });

      // this.analysisData(scaleData);
    };

    return {
      onMeasureComplete,
      onGetUnsteadyWeight,
    };
  },
  updateState(bleState: string) {
    this.setData({ bleState });
  },
} as MeasurePage);
