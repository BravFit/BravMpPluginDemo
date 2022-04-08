import { BleNative } from './BleNative';
import { BravNativeDeviceDelegate } from './BravNativeDeviceDelegate';
import BravLibType from '../typings';
export declare class BleNativeMP implements BleNative {
    constructor(mpwx: WechatMiniprogram.Wx);
    listener: BravNativeDeviceDelegate | undefined;
    deviceCached: {
        [key: string]: BravLibType.BravNativeDevice;
    };
    localBleEnableState: BravLibType.BravBleEnableState;
    discovering: boolean;
    mpwx: WechatMiniprogram.Wx;
    bleServer: WechatMiniprogram.BLEPeripheralServer | undefined;
    bleServerStatus: 'none' | 'creating' | 'available';
    get bleEnableState(): BravLibType.BravBleEnableState;
    onNativeEventListener(listener: BravNativeDeviceDelegate): void;
    initBle(): Promise<void>;
    startScan(options: BravLibType.BravScanOptions): Promise<BravLibType.BravResult<any>>;
    stopScan(): Promise<void>;
    connectDevice(deviceId: String): BravLibType.BravResult<any>;
    disconnectDevice(deviceId: String): void;
    doAdvertising(data: number[]): Promise<void>;
    stopAdvertising(): Promise<void>;
    closeDevice(deviceId: String): Promise<void>;
    notify(deviceId: String, serviceUuid: string, notifyUUID: string): void;
    indicate(deviceId: String, serviceUuid: string, notifyUUID: string): void;
    writeData(deviceId: String, serviceUuid: string, notifyUUID: string, data: number[]): void;
    onDeviceFound: (result: WechatMiniprogram.OnBluetoothDeviceFoundCallbackResult) => void;
    onBluetoothAdapterStateChange: (result: WechatMiniprogram.OnBluetoothAdapterStateChangeCallbackResult) => void;
    onBLEConnectionStateChange: (result: WechatMiniprogram.OnBLEConnectionStateChangeCallbackResult) => void;
    onBLECharacteristicValueChange: (result: WechatMiniprogram.OnBLECharacteristicValueChangeCallbackResult) => void;
    createBleServer(): Promise<WechatMiniprogram.BLEPeripheralServer | undefined>;
    log(...arg: any): void;
}
