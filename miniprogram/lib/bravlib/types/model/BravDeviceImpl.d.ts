import BravLibType from '../typings';
export declare class BravDeviceImpl implements BravLibType.BravDevice {
    constructor(nativeDevice: BravLibType.BravNativeDevice);
    nativeDevice: BravLibType.BravNativeDevice;
    transferType: BravLibType.BravBleTransferType;
    mac: string;
    modelId: string;
    profileType: BravLibType.BravDeviceProfileType;
    category: BravLibType.BravDeviceCategory;
    profileId: string;
    get isBroadcast(): boolean;
    get deviceId(): string;
    get rssi(): number;
}
