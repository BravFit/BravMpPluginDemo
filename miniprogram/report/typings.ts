import { BravLibType } from '../lib/bravlib/types';
export interface ReportI18n {
  [key: string]: string;
}

export interface ReportLevelItem {
  name: string;
  color: string;
  desc: string;
}

export interface ReportItem {
  id: string;
  name: string;
  value: number;
  valueString: string;
  boundaries: number[];
  min: number;
  max: number;
  levels: ReportLevelItem[];
  levelIndex: number;
  isStandard: boolean;
  unit: string;
  desc: string;
  intro: string;
  isWeightUnit: boolean;

  isBarVisible: boolean;
  targetLevel?: ReportLevelItem;
}

export type ReportType = 'common' | 'asia';

export interface ReportBuilderOption {
  targetWeightUnit: BravLibType.BravScaleUnit;
  i18n: ReportI18n;
  reportType: ReportType;
}

export interface BravScaleReport {
  readonly scaleData: BravLibType.BravScaleData;

  reportItemList: ReportItem[];
}

export interface ReportItemBuilder {
  readonly scaleData: BravLibType.BravScaleData;
  readonly option: ReportBuilderOption;
  readonly id: string;
  readonly nameKey: string;
  readonly defaultName: string;
  readonly introKey: string;
  readonly isValid: boolean;
  readonly value: number;
  readonly valueString: string;
  readonly min: number;
  readonly max: number;
  readonly unit: string;
  readonly isWeightUnit: boolean;
  readonly boundaries: number[];
  readonly levels?: ReportLevelItem[];
  readonly standLevelIndex: number;
}
