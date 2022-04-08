import BravLibType from '../../typings';
import ReportItemBuilderImpl from '../ReportItemBuilder';
export default class WeightCommonBuilder extends ReportItemBuilderImpl {
    id: string;
    isValid: boolean;
    nameKey: string;
    defaultName: string;
    introKey: string;
    standLevelIndex: number;
    isWeightUnit: boolean;
    min: number;
    max: number;
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
    build(): BravLibType.ReportItem;
}
