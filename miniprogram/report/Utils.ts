import { BravLibType } from '../lib/bravlib/types';

const BravPlugin = requirePlugin('brav-lib');
// import { BravApiProvider } from './lib/bravlib/index';
const { BravUtils } = BravPlugin;

export const colors = {
  background: '#f8f8f8',
  partLine: '#e5e5e5',
  master: '#7370aa',
  second: '#8d77df',
  report_lowest: '#aa8ee4',
  report_lower: '#00c1e4',
  report_standard: '#a7cb40',
  report_higher: '#fbc13d',
  report_highest: '#f74142',
  report_sufficient: '#3ea42c',
  report_orange_highest: '#ff8c00',
  report_claret_sufficient: '#7f1734',
};

export function toTargetWeightUnit(
  value: number,
  valueUnit: BravLibType.BravScaleUnit,
  targetUnit: BravLibType.BravScaleUnit
): number {
  if (valueUnit == targetUnit) {
    return value;
  }
  if (valueUnit == 'kg' && targetUnit == 'jin') {
    return BravUtils.kg2jin(value);
  } else if (valueUnit == 'kg' && targetUnit == 'lb') {
    return BravUtils.kg2lb(value);
  } else if (valueUnit == 'jin' && targetUnit == 'kg') {
    return BravUtils.jin2kg(value);
  } else if (valueUnit == 'jin' && targetUnit == 'lb') {
    return BravUtils.jin2kg(value);
  } else if (valueUnit == 'lb' && targetUnit == 'kg') {
    return BravUtils.lb2kg(value);
  } else if (valueUnit == 'lb' && targetUnit == 'jin') {
    return BravUtils.lb2jin(value);
  } else {
    return value;
  }
}
