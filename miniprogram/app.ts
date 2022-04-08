const BravPlugin = requirePlugin('brav-lib');
const { BravApiProvider } = BravPlugin;

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    BravApiProvider.initSharedBleApi({ mode: 'miniprogram', mpwx: wx });
  },
});
