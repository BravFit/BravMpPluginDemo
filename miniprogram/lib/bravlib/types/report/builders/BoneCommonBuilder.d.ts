import BravLibType from '../../typings';
import ReportItemBuilderImpl from '../ReportItemBuilder';
export default class BoneCommonBuilder extends ReportItemBuilderImpl {
    id: string;
    nameKey: string;
    defaultName: string;
    introKey: string;
    standLevelIndex: number;
    isWeightUnit: boolean;
    min: number;
    max: number;
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
}
