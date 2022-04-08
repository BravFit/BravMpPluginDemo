import BravLibType from '../typings';
export default class ReportBuilder {
    scaleData: BravLibType.BravScaleData;
    option: BravLibType.ReportBuilderOption;
    constructor(scaleData: BravLibType.BravScaleData, option: BravLibType.ReportBuilderOption);
    build(): BravLibType.BravScaleReport;
}
