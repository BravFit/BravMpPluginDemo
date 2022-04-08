import ReportItemBuilderImpl from '../ReportItemBuilder';
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';

import { colors } from '../Utils';

export default class BmiCommonBuilder extends ReportItemBuilderImpl {
  id = 'bmi';
  isValid = true;
  nameKey = 'brav_report_item_name_bmi';
  defaultName = 'BMI';
  introKey: string = 'report_desc_bmi_1001';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = false;

  unit = '';

  min: number = 3.0;
  max: number = 35.0;

  boundaries: number[];

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = this.scaleData.bmi;
    this.boundaries = [18.5, 25.0, 30.0];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_under_weight'),
        desc: this.i18n('report_desc_bmi_1002'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_health_weight'),
        desc:
          this.gender == 'Male'
            ? this.i18n('report_desc_bmi_1003')
            : this.i18n('report_desc_bmi_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_overweight'),
        desc: this.i18n('report_desc_bmi_1005'),
      },
      {
        color: colors.report_highest,
        name: this.i18n('report_level_obesity'),
        desc: this.i18n('report_desc_bmi_1005'),
      },
    ];
  }
}
