
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors } from '../Utils';

export default class BodyfatCommonBuilder extends ReportItemBuilderImpl {
  id = 'bodyfat';
  nameKey = 'report_item_bodyfat_rate';
  defaultName = 'Bodyfat percentage';
  introKey: string = 'report_desc_bodyfat_1002';
  standLevelIndex: number = 2;
  isWeightUnit: boolean = false;

  unit = '%';

  min: number = 5.0;
  max: number = 45.0;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.bodyfatRate;
    this.boundaries =
      this.gender == 'Male'
        ? [2.0, 6.0, 13.0, 17.0, 25.0]
        : [10.0, 14.0, 21.0, 25.0, 32.0];
    this.levels = [
      {
        color: colors.report_lowest,
        name: this.i18n('report_level_extremely_low'),
        desc: this.i18n('report_desc_bodyfat_1003'),
      },
      {
        color: colors.report_lower,
        name: this.i18n('report_level_thin'),
        desc: this.i18n('report_desc_bodyfat_1004'),
      },
      {
        color: colors.report_sufficient,
        name: this.i18n('report_level_athletes'),
        desc: this.i18n('report_desc_bodyfat_1005'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_fitness'),
        desc: this.i18n('report_desc_bodyfat_1006'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_acceptable'),
        desc: this.i18n('report_desc_bodyfat_1007'),
      },
      {
        color: colors.report_highest,
        name: this.i18n('report_level_obesity'),
        desc: this.i18n('report_desc_bodyfat_1008'),
      },
    ];
  }
}
