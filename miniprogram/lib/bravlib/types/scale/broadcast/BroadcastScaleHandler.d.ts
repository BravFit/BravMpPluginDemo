import BravLibType from '../../typings';
interface LastMeasurement {
    weight: number;
    count: number;
    timestamp: number;
}
export declare class BroadcastScaleHandler implements BravLibType.BravDeviceHandler {
    static appMac: number[];
    static keys: number[];
    static lastMeasurement: LastMeasurement | undefined;
    get device(): BravLibType.BravDevice;
    handlerBle: BravLibType.BravDeviceHandlerBle;
    scaleDevice: BravLibType.BravScaleDevice;
    options: BravLibType.BravScaleDataOptions;
    listener: BravLibType.BravScaleEventDelegate;
    get bleDevice(): BravLibType.BravScaleDevice;
    connectionChangeListener: BravLibType.BravBleConnectionChangeDelegate | undefined;
    currentAdverts: number[];
    measureCount: number;
    hasReturnOfflineData: boolean;
    hasOfflineData: boolean;
    offlineData: {
        [key: number]: BravLibType.BravScaleOriginData;
    };
    connectionTimer: any | undefined;
    writeModel: boolean;
    hasReturnWriteModelResult: boolean;
    needDelayReturnWriteModelResult: boolean;
    targetModelId: string;
    constructor(handlerBle: BravLibType.BravDeviceHandlerBle, device: BravLibType.BravScaleDevice, options: BravLibType.BravScaleDataOptions, listener: BravLibType.BravDeviceEventDelegate, connectionChangeListener: BravLibType.BravBleConnectionChangeDelegate | undefined);
    setupConnectionTime(): void;
    onDeviceReady(services: BravLibType.BravBleService[]): void;
    onFoundNativeDevice(nativeDevice: BravLibType.BravNativeDevice): void;
    decodeData(data: number[], serviceUUid: string, notifyUUID: string): void;
    close(): void;
    dispatchSteadyData(weight: number, data: number[]): void;
    doAdvertising(cmdData: number[]): void;
    buildAdvertisingData(data: number[]): number[];
    buildDataForConfirmData(macs: number[], appMacs: number[], op: number, dataIndexByte: number): number[];
    buildDataForConnect(macs: number[], appMacs: number[]): number[];
    buildDataForHeartRate(macs: number[], appMacs: number[]): number[];
    fetchAppMacs(): number[];
    fetchMacs(): number[];
    fetchUnitBit(): number;
    log(...arg: any): void;
    isMySelf(broadcastAppMac: number[]): boolean;
}
export {};
