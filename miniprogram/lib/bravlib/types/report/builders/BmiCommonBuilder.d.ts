import BravLibType from '../../typings';
import ReportItemBuilderImpl from '../ReportItemBuilder';
export default class BmiCommonBuilder extends ReportItemBuilderImpl {
    id: string;
    isValid: boolean;
    nameKey: string;
    defaultName: string;
    introKey: string;
    standLevelIndex: number;
    isWeightUnit: boolean;
    unit: string;
    min: number;
    max: number;
    boundaries: number[];
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
}
