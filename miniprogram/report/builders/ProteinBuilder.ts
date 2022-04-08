
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class ProteinBuilder extends ReportItemBuilderImpl {
  id = 'protein';
  nameKey = 'report_item_bodyfat_rate';
  defaultName = 'Protein percentage';
  introKey: string = 'report_desc_protein_1002';
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
    this.value = scaleData.proteinRate;
    this.boundaries = this.gender == 'Male' ? [16.0, 18.0] : [14.0, 16.0];
    this.levels = [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_low'),
        desc: this.i18n('report_desc_protein_1003'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_standard'),
        desc: this.i18n('report_desc_protein_1004'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_adequate'),
        desc: this.i18n('report_desc_protein_1005'),
      },
    ];
  }
}
