import BravLibType from '../../typings';
import { BravDeviceImpl } from '../../model/BravDeviceImpl';
export declare class BravScaleDeviceImpl extends BravDeviceImpl implements BravLibType.BravScaleDevice {
    isScreenOn: boolean;
    appMac: number[];
    weight: number;
    get isConnected(): boolean;
}
