const BravPlugin = requirePlugin('brav-lib');
// import { BravApiProvider } from './lib/bravlib/index';
const { BravApiProvider } = BravPlugin;

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    BravApiProvider.initSharedBleApi({ mode: 'miniprogram', mpwx: wx });
  },
});
