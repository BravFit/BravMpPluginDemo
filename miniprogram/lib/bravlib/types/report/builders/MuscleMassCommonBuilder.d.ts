import BravLibType from '../../typings';
import ReportItemBuilderImpl from '../ReportItemBuilder';
export default class MuscleMassCommonBuilder extends ReportItemBuilderImpl {
    id: string;
    nameKey: string;
    defaultName: string;
    introKey: string;
    standLevelIndex: number;
    isWeightUnit: boolean;
    genBoundaries(): number[];
    genLevels(): BravLibType.ReportLevelItem[];
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
}
