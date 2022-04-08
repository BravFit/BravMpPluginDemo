import BravLibType from '../typings';
export default abstract class ReportItemBuilderImpl implements BravLibType.ReportItemBuilder {
    scaleData: BravLibType.BravScaleData;
    option: BravLibType.ReportBuilderOption;
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
    id: string;
    nameKey: string;
    defaultName: string;
    introKey: string;
    isValid: boolean;
    value: number;
    valueString: string;
    min: number;
    max: number;
    unit: string;
    isWeightUnit: boolean;
    boundaries: number[];
    levels: BravLibType.ReportLevelItem[];
    standLevelIndex: number;
    get user(): BravLibType.BravScaleUser;
    get gender(): BravLibType.BravGender;
    get targetUnit(): BravLibType.BravScaleUnit;
    get valueUnit(): BravLibType.BravScaleUnit;
    i18n(key: string, defValue?: string, param?: string): string;
    initAndInjectFields(): BravLibType.ReportItem;
    calcLevelIndex(value: number, boundaries: number[], standLevelIndex: number): number;
    build(): BravLibType.ReportItem;
}
