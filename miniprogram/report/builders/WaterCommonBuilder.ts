
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class WaterCommonBuilder extends ReportItemBuilderImpl {
  id = 'water';
  nameKey = 'report_item_water_rate';
  defaultName = 'Water percentage';

  introKey: string = 'report_desc_water_1002';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = false;

  unit = '%';

  min: number = 5.0;
  max: number = 45.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.waterRate;
    this.boundaries = this.gender == 'Male' ? [50, 65] : [45, 60];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_low'),
        desc: this.i18n('report_desc_water_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_standard'),
        desc: this.i18n('report_desc_water_1003'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_high'),
        desc: this.i18n('report_desc_water_1004'),
      },
    ];
  }
}
