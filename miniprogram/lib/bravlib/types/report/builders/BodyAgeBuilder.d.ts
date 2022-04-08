import BravLibType from '../../typings';
import ReportItemBuilderImpl from '../ReportItemBuilder';
export default class BodyAgeBuilder extends ReportItemBuilderImpl {
    id: string;
    nameKey: string;
    defaultName: string;
    introKey: string;
    isWeightUnit: boolean;
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
}
