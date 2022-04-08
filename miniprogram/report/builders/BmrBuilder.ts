
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class BmrBuilder extends ReportItemBuilderImpl {
  id = 'bmr';
  nameKey = 'report_item_bmr';
  defaultName = 'BMR';
  introKey: string = 'report_desc_bmr_1001';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = false;

  unit = 'kcal';

  min: number = 0;
  max: number = 2000;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.bmr;
    this.boundaries = [this.value];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_not_standard'),
        desc: this.i18n('report_desc_bmr_1002', undefined, '(scaleData.bmr)'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_standard'),
        desc: this.i18n('report_desc_bmr_1003', undefined, '(scaleData.bmr)'),
      },
    ];
  }
}
