import { BravLibType } from '../lib/bravlib/types';

import BmiCommonBuilder from './builders/BmiCommonBuilder';
import BmrBuilder from './builders/BmrBuilder';
import BodyAgeBuilder from './builders/BodyAgeBuilder';
import BodyfatCommonBuilder from './builders/BodyfatCommonBuilder';
import BoneCommonBuilder from './builders/BoneCommonBuilder';
import LbmBuilder from './builders/LbmBuilder';
import MuscleMassCommonBuilder from './builders/MuscleMassCommonBuilder';
import ProteinBuilder from './builders/ProteinBuilder';
import SkeletalMuscleBuilder from './builders/SkeletalMuscleBuilder';
import SubfatBuilder from './builders/SubfatBuilder';
import VisfatCommonBuilder from './builders/VisfatCommonBuilder';
import WaterCommonBuilder from './builders/WaterCommonBuilder';
import WeightCommonBuilder from './builders/WeightCommonBuilder';
import { BravScaleReport, ReportBuilderOption } from './typings';

export default class ReportBuilder {
  scaleData: BravLibType.BravScaleData;
  option: ReportBuilderOption;

  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    this.scaleData = scaleData;
    this.option = option;
  }

  build(): BravScaleReport {
    const builders = [
      new WeightCommonBuilder(this.scaleData, this.option),
      new BmiCommonBuilder(this.scaleData, this.option),
      new BodyfatCommonBuilder(this.scaleData, this.option),
      new BoneCommonBuilder(this.scaleData, this.option),
      new LbmBuilder(this.scaleData, this.option),
      new MuscleMassCommonBuilder(this.scaleData, this.option),
      new ProteinBuilder(this.scaleData, this.option),
      new SkeletalMuscleBuilder(this.scaleData, this.option),
      new SubfatBuilder(this.scaleData, this.option),
      new VisfatCommonBuilder(this.scaleData, this.option),
      new WaterCommonBuilder(this.scaleData, this.option),
      new BmrBuilder(this.scaleData, this.option),
      new BodyAgeBuilder(this.scaleData, this.option),
    ];
    const reportItemList = builders
      .filter((it) => it.isValid)
      .map((it) => it.build());
    return {
      scaleData: this.scaleData,
      reportItemList,
    };
  }
}
