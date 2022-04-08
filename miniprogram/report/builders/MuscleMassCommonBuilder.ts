
import { ReportBuilderOption, ReportLevelItem } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { colors, toTargetWeightUnit } from '../Utils';

export default class MuscleMassCommonBuilder extends ReportItemBuilderImpl {
  id = 'muscle_mass';
  nameKey = 'report_item_muscle_mass';
  defaultName = 'Muscle Mass';
  introKey: string = 'report_desc_muscle_mass_1004';
  standLevelIndex: number = 1;
  isWeightUnit: boolean = true;

  genBoundaries(): number[] {
    let _boundaries: number[];
    let gender = this.user.gender;
    let height = this.user.height;

    if (gender == 'Male') {
      if (height < 160) {
        _boundaries = [38.5, 46.5];
      } else if (height <= 170) {
        _boundaries = [44, 52.4];
      } else {
        _boundaries = [49.4, 59.4];
      }
    } else if (height < 150) {
      _boundaries = [29.1, 34.7];
    } else if (height <= 160) {
      _boundaries = [32.9, 37.5];
    } else {
      _boundaries = [36.5, 42.5];
    }

    return _boundaries.map((it) => {
      return toTargetWeightUnit(it, 'kg', this.targetUnit);
    });
  }

  genLevels(): ReportLevelItem[] {
    return [
      {
        color: colors.report_lower,
        name: this.i18n('report_level_low'),
        desc: this.i18n('report_desc_muscle_mass_1002'),
      },
      {
        color: colors.report_standard,
        name: this.i18n('report_level_normal'),
        desc: this.i18n('report_desc_muscle_mass_1003'),
      },
      {
        color: colors.report_higher,
        name: this.i18n('report_level_adequate'),
        desc: this.i18n('report_desc_muscle_mass_1003'),
      },
    ];
  }

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = toTargetWeightUnit(
      scaleData.muscleMass,
      this.valueUnit,
      this.targetUnit
    );
    this.boundaries = this.genBoundaries();
    this.levels = this.genLevels();
    this.min = this.boundaries[0] * 0.5;
    this.max = this.boundaries[this.boundaries.length - 1] * 1.5;
  }
}
