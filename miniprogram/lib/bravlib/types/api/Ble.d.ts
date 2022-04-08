import { BleNative } from '../blenative/BleNative';
import { BravNativeDeviceDelegate } from '../blenative/BravNativeDeviceDelegate';
import BravLibType from '../typings';
export declare class Ble implements BravLibType.BravBleApi, BravLibType.BravDeviceHandlerBle, BravNativeDeviceDelegate {
    bleEventDelegate: BravLibType.BravBleEventDelegate | undefined;
    bleNative: BleNative;
    scanOptions: BravLibType.BravScanOptions | undefined;
    constructor(bleNative: BleNative);
    profiles: BravLibType.BravDeviceProfile[];
    handlerMaps: {
        [key: string]: BravLibType.BravDeviceHandler;
    };
    deviceCache: {
        [key: string]: BravLibType.BravDevice;
    };
    init(bleNative: BleNative): void;
    get bleEnableState(): BravLibType.BravBleEnableState;
    initBle(): void;
    startScan(options: BravLibType.BravScanOptions): Promise<BravLibType.BravResult<any>>;
    stopScan(): Promise<void>;
    connectDevice(bravDevice: BravLibType.BravDevice | string, options: any, listener: BravLibType.BravDeviceEventDelegate, connectionChangeListener: BravLibType.BravBleConnectionChangeDelegate | undefined): Promise<BravLibType.BravResult<any>>;
    disconnectDevice(deviceId: string): void;
    close(): void;
    private onDeviceConnectionStateChange;
    doAdvertising(advertiseData: number[]): Promise<void>;
    stopAdvertising(): Promise<void>;
    closeDevice(deviceId: string): Promise<void>;
    notify(deviceId: string, serviceUuid: string, notifyUUID: string): void;
    indicate(deviceId: string, serviceUuid: string, notifyUUID: string): void;
    writeData(deviceId: string, serviceUuid: string, notifyUUID: string, data: number[]): void;
    onNativeBleEnableChange(bleEnableState: BravLibType.BravBleEnableState): void;
    onNativeDeviceFound(device: BravLibType.BravNativeDevice): void;
    onNativeDeviceConnectionChange(deviceId: string, connectionState: BravLibType.BravDeviceConnectionState): void;
    onNativeDeviceReady(deviceId: string, services: [BravLibType.BravBleService]): void;
    onNativeDeviceNotify(deviceId: string, data: number[], serviceUuid: string, notifyUUID: string): void;
}
