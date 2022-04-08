import BravLibType from '../typings';
export default class BravApiProvider {
    private static bleApi;
    private static initFlag;
    static initSharedBleApi(option?: BravLibType.BravBleApiOption): void;
    static get sharedBleApi(): BravLibType.BravBleApi;
}
