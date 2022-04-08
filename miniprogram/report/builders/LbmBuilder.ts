
import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';

import { toTargetWeightUnit } from '../Utils';

export default class LbmBuilder extends ReportItemBuilderImpl {
  id = 'lbm';
  nameKey = 'report_item_lbm';
  defaultName = 'Lean fat body mass';
  introKey: string = 'report_desc_lbm_1002';
  isWeightUnit: boolean = true;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = toTargetWeightUnit(
      scaleData.lbm,
      this.valueUnit,
      this.targetUnit
    );
  }
}
