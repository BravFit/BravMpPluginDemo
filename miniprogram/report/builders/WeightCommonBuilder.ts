
import { ReportBuilderOption, ReportItem } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors, toTargetWeightUnit } from '../Utils';
import BmiCommonBuilder from './BmiCommonBuilder';

export default class WeightCommonBuilder extends ReportItemBuilderImpl {
  id = 'Weight';
  isValid = true;
  nameKey = 'report_item_body_weight';
  defaultName = 'Weight';
  introKey: string = 'report_desc_weight_1002';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = true;

  min: number = 3.0;
  max: number = 35.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = toTargetWeightUnit(
      scaleData.weight,
      this.valueUnit,
      this.targetUnit
    );
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_low'),
        desc: this.i18n('report_desc_weight_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_standard'),
        desc: this.i18n('report_desc_weight_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_high'),
        desc: this.i18n('report_desc_weight_1005'),
      },
      {
        color: colors.report_highest,
        name: this.i18n('report_level_severely_high'),
        desc: this.i18n('report_desc_weight_1006'),
      },
    ];
  }

  build(): ReportItem {
    const reportItem = this.initAndInjectFields();
    let bmiBuilder = new BmiCommonBuilder(this.scaleData, this.option);
    let bmiItem = bmiBuilder.build();
    let height = this.user.height;
    reportItem.levelIndex = bmiItem.levelIndex;

    let boundaries = bmiItem.boundaries
      .map((it) => (height * height * it) / 10000.0)
      .map((it) => toTargetWeightUnit(it, 'kg', this.targetUnit));

    reportItem.boundaries = boundaries;
    reportItem.min = boundaries[0] * 0.5;
    reportItem.max = boundaries[boundaries.length - 1]! * 1.5;
    reportItem.targetLevel = reportItem.levels[reportItem.levelIndex]
    return reportItem;
  }
}
