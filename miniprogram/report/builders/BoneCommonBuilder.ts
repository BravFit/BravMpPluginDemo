
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors, toTargetWeightUnit } from '../Utils';

export default class BoneCommonBuilder extends ReportItemBuilderImpl {
  id = 'bone';
  nameKey = 'brav_report_item_name_bone';
  defaultName = 'Bone mass';
  introKey: string = 'brav_report_item_intro_bone';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = true;

  min: number = 5.0;
  max: number = 45.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = toTargetWeightUnit(
      scaleData.bone,
      this.valueUnit,
      this.targetUnit
    );
    this.boundaries = this.gender == 'Male' ? [3.0, 5.0] : [2.5, 4.0];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_below_average'),
        desc: this.i18n('report_desc_bone_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_average'),
        desc: this.i18n('report_desc_bone_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_above_average'),
        desc: this.i18n('report_desc_bone_1005'),
      },
    ];
  }
}
