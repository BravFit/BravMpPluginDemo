import BravLibType from '../../typings';
export declare class BroadcastScaleProfile implements BravLibType.BravDeviceProfile {
    profileId: string;
    acceptDevice(nativeDevice: BravLibType.BravNativeDevice): BravLibType.BravDevice | undefined;
    generateHandler(handlerBle: BravLibType.BravDeviceHandlerBle, bravDevice: BravLibType.BravDevice, options: any, listener: BravLibType.BravDeviceEventDelegate, connectionChangeListener: BravLibType.BravBleConnectionChangeDelegate | undefined): BravLibType.BravDeviceHandler;
    private buildScaleDevice;
}
