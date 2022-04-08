
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class SkeletalMuscleBuilder extends ReportItemBuilderImpl {
  id = 'skeletal_muscle';
  nameKey = 'report_item_skeletal_muscle_rate';
  defaultName = 'Skeletal muscle percentage';
  introKey: string = 'report_desc_skeletal_muscle_rate_1002';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = false;

  unit = '%';

  min: number = 5.0;
  max: number = 30.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.skeletalMuscleRate;
    this.boundaries = this.gender == 'Male' ? [49.0, 59.0] : [40.0, 50.0];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_low'),
        desc: this.i18n('report_desc_skeletal_muscle_rate_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_standard'),
        desc: this.i18n('report_desc_skeletal_muscle_rate_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_high'),
        desc: this.i18n('report_desc_skeletal_muscle_rate_1005'),
      },
    ];
  }
}
