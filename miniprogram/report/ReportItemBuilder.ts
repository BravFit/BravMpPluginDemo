import { BravLibType } from '../lib/bravlib/types';
import {
  ReportBuilderOption,
  ReportItem,
  ReportItemBuilder,
  ReportLevelItem,
} from './typings';

export default abstract class ReportItemBuilderImpl
  implements ReportItemBuilder
{
  scaleData: BravLibType.BravScaleData;
  option: ReportBuilderOption;
  constructor(
    scaleData: BravLibType.BravScaleData,
    option: ReportBuilderOption
  ) {
    this.scaleData = scaleData;
    this.option = option;
    this.isValid = this.scaleData.bodyfatRate > 0;
  }

  id: string = '';
  nameKey: string = '';
  defaultName: string = '';

  introKey = '';

  isValid: boolean;

  value: number = 0;

  valueString: string = '';

  min: number = 0;

  max: number = 100;

  unit: string = '';

  isWeightUnit: boolean = false;

  boundaries: number[] = [];

  levels: ReportLevelItem[] = [];

  standLevelIndex: number = 1;

  get user(): BravLibType.BravScaleUser {
    return this.scaleData.user;
  }

  get gender(): BravLibType.BravGender {
    return this.user.gender;
  }

  get targetUnit(): BravLibType.BravScaleUnit {
    return this.option.targetWeightUnit;
  }

  get valueUnit(): BravLibType.BravScaleUnit {
    return this.scaleData.weightUnit;
  }

  i18n(key: string, defValue?: string, param?: string): string {
    let tartValue = this.option.i18n[key] ?? defValue ?? `Miss [${key}]`;
    if (param) {
      tartValue = tartValue.replace('XXX', param);
    }
    return tartValue;
  }

  initAndInjectFields(): ReportItem {
    let reportItem: ReportItem = {
      id: this.id,
      name: this.i18n(this.nameKey, this.defaultName),
      intro: this.i18n(this.introKey, ''),
      min: this.min,
      max: this.max,
      unit: this.isWeightUnit ? this.option.targetWeightUnit : this.unit,
      isWeightUnit: this.isWeightUnit,
      value: this.value,
      valueString: this.valueString,
      boundaries: this.boundaries,
      levels: this.levels,
      desc: '',
      levelIndex: 0,
      isStandard: false,
      isBarVisible: this.levels.length > 0,
    };

    if (reportItem.levels.length > 0 && reportItem.boundaries.length > 0) {
      reportItem.levelIndex = this.calcLevelIndex(
        this.value,
        reportItem.boundaries,
        this.standLevelIndex
      );
      reportItem.isStandard = reportItem.levelIndex == this.standLevelIndex;
      reportItem.targetLevel = reportItem.levels[reportItem.levelIndex];
      reportItem.desc = reportItem.targetLevel!.desc;
    }
    return reportItem;
  }

  /**
   * 计算指标的等级索引值
   * @param {number} value - 指标的数值
   * @param {Array<number>} boundaries - 界定等级的边界值
   * @param {number} standLevelIndex - 定义的标准值得索引
   */
  calcLevelIndex(value: number, boundaries: number[], standLevelIndex: number) {
    var level = 0;
    for (let b of boundaries) {
      if (value < b || (value == b && level == standLevelIndex)) {
        break;
      }
      level += 1;
    }
    return level;
  }

  build(): ReportItem {
    return this.initAndInjectFields();
  }
}
