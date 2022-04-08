
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class VisfatCommonBuilder extends ReportItemBuilderImpl {
  id = 'visfat';
  nameKey = 'report_item_visfat';
  defaultName = 'Visfat';
  introKey: string = 'report_desc_visfat_1002';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = false;

  min: number = 0.0;
  max: number = 30.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.visfat;
    this.boundaries = [6.0, 11.0, 14.0];
    this.levels = [
      {
        color: colors.report_sufficient,
        name: this.i18n('report_level_good'),
        desc: this.i18n('report_desc_visfat_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_acceptable'),
        desc: this.i18n('report_desc_visfat_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_high'),
        desc: this.i18n('report_desc_visfat_1005'),
      },
      {
        color: colors.report_highest,
        name: this.i18n('report_level_severely_high'),
        desc: this.i18n('report_desc_visfat_1006'),
      },
    ];
  }
}
