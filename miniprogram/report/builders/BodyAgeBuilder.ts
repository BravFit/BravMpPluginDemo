import { ReportBuilderOption } from '../typings';
import { BravLibType } from '../../lib/bravlib/types';
import ReportItemBuilderImpl from '../ReportItemBuilder';


export default class BodyAgeBuilder extends ReportItemBuilderImpl {
  id = 'bodyAge';
  nameKey = 'report_item_body_age';
  defaultName = '';
  introKey: string = 'report_desc_body_age_1002';
  isWeightUnit: boolean = false;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    super(scaleData, option);
    this.value = scaleData.bodyAge;
  }
}
