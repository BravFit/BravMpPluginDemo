import BravLibType from '../../typings';
export default class BravScaleOriginDataImpl implements BravLibType.BravScaleOriginData {
    weight: number;
    impedance: number;
    mac: string;
    modelId: string;
    times: Date;
    unit: BravLibType.BravScaleUnit;
    constructor(weight: number, impedance: number, mac: string, times: Date);
}
