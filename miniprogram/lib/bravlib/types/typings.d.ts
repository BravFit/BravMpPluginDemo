declare namespace BravLibType {
    interface BravBleApiOption {
        mode?: 'miniprogram';
        mpwx?: WechatMiniprogram.Wx;
    }
    interface BravBleApi {
        bleEnableState: BravBleEnableState;
        bleEventDelegate: BravBleEventDelegate | undefined;
        close(): void;
        startScan(options: BravScanOptions): Promise<BravResult<any>>;
        stopScan(): Promise<void>;
        connectDevice(bravDevice: BravDevice | string, options: any, listener: BravDeviceEventDelegate, connectionChangeListener?: BravBleConnectionChangeDelegate | undefined): Promise<BravResult<any>>;
        disconnectDevice(deviceId: string): void;
    }
    interface BravDeviceHandler {
        device: BravDevice;
        connectionChangeListener: BravBleConnectionChangeDelegate | undefined;
        onDeviceReady(services: BravBleService[]): void;
        onFoundNativeDevice(nativeDevice: BravNativeDevice): void;
        decodeData(data: number[], serviceUUid: string, notifyUUID: string): void;
        close(): void;
    }
    interface BravDeviceHandlerBle {
        doAdvertising(advertiseData: number[]): Promise<void>;
        stopAdvertising(): Promise<void>;
        closeDevice(deviceId: string): Promise<void>;
        notify(deviceId: string, serviceUuid: string, notifyUUID: string): void;
        indicate(deviceId: string, serviceUuid: string, notifyUUID: string): void;
        writeData(deviceId: string, serviceUuid: string, notifyUUID: string, data: number[]): void;
    }
    interface BravLoggerDelegate {
        onLog(tag: string, text: string): void;
        onError(tag: string, text: string): void;
    }
    interface BravDeviceProfile {
        profileId: string;
        acceptDevice(nativeDevice: BravNativeDevice): BravDevice | undefined;
        generateHandler(handlerBle: BravDeviceHandlerBle, bravDevice: BravDevice, options: any, listener: BravDeviceEventDelegate, connectionChangeListener: BravBleConnectionChangeDelegate | undefined): BravDeviceHandler;
    }
    interface BravDeviceEventDelegate {
    }
    interface BravBleConnectionChangeDelegate {
        onConnectionChange(deviceId: string, state: BravDeviceConnectionState): void;
    }
    interface BravScanOptions {
        mac?: string;
        minRssi?: number;
    }
    interface BravBleEventDelegate extends BravBleConnectionChangeDelegate {
        onBleEnableStateChange(state: BravBleEnableState): void;
        onBravDeviceFound(device: BravDevice): void;
    }
    interface BravScaleEventDelegate extends BravDeviceEventDelegate {
        onGetUnsteadyWeight(deviceId: string, weight: number): void;
        onMeasureComplete(deviceId: string, scaleData: BravScaleData): void;
        onGetOfflineData(deviceId: string, scaleDataList: BravScaleOriginData[]): void;
    }
    interface BravBleCharacteristic {
        uuid: string;
    }
    interface BravResult<T> {
        code: BravErrorCode;
        data?: T | undefined;
        get isSuccess(): boolean;
    }
    interface BravDevice {
        nativeDevice: BravNativeDevice;
        transferType: BravBleTransferType;
        mac: string;
        modelId: string;
        profileType: BravDeviceProfileType;
        category: BravDeviceCategory;
        profileId: string;
        get isBroadcast(): boolean;
        get deviceId(): string;
        get rssi(): number;
    }
    interface BravNativeDevice {
        deviceId: string;
        device: any;
        rssi: number;
        bluetoothName: string;
        manufacturerSpecificData: number[];
    }
    interface BravScaleDevice extends BravDevice {
        isScreenOn: boolean;
        appMac: number[];
        weight: number;
    }
    interface BravBleService {
        uuid: string;
        characteristics: BravBleCharacteristic[];
    }
    interface BravScaleUser {
        gender: BravGender;
        height: number;
        age: number;
        athleteType: number;
        scaleAlgorithmMethod: BravScaleAlgorithmMethod;
    }
    interface BravScaleOriginData {
        weight: number;
        impedance: number;
        mac: string;
        modelId: string;
        times: Date;
        unit: BravScaleUnit;
    }
    interface BravScaleDataOptions {
        user: BravScaleUser;
        unit: BravScaleUnit;
    }
    interface BravScaleData {
        user: BravScaleUser;
        originData: BravScaleOriginData;
        weightUnit: BravScaleUnit;
        weight: number;
        bmi: number;
        bodyfatRate: number;
        bodyfatMass: number;
        subfatRate: number;
        visfat: number;
        waterRate: number;
        waterMass: number;
        bmr: number;
        skeletalMuscleRate: number;
        skeletalMuscleMass: number;
        muscleMass: number;
        muscleRate: number;
        lbm: number;
        bone: number;
        proteinRate: number;
        proteinMass: number;
        score: number;
        bodyAge: number;
        bodyShape: number;
    }
    type BravBleEnableState = 'Unknown' | 'Enable' | 'Disable';
    type BravBleTransferType = 'BleConnection' | 'Broadcast';
    type BravDeviceCategory = 'Scale';
    type BravDeviceConnectionState = 'Disconnected' | 'Connecting' | 'Connected' | 'Disconnecting';
    type BravDeviceProfileType = 'BravBroadcastScale';
    type BravErrorCode = 'Success' | 'DeviceNotFound' | 'BluetoothDisabled' | 'DeviceProfileNotFind';
    type BravGender = 'Male' | 'Female';
    type BravScaleAlgorithmMethod = 'common' | 'asia';
    type BravScaleUnit = 'kg' | 'jin' | 'lb';
}
export default BravLibType;
