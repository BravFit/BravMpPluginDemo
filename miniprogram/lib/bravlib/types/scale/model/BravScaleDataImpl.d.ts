import BravLibType from '../../typings';
export default class BravScaleDataImpl implements BravLibType.BravScaleData {
    user: BravLibType.BravScaleUser;
    originData: BravLibType.BravScaleOriginData;
    weightUnit: BravLibType.BravScaleUnit;
    constructor(user: BravLibType.BravScaleUser, originData: BravLibType.BravScaleOriginData);
    weight: number;
    bmi: number;
    bodyfatRate: number;
    bodyfatMass: number;
    subfatRate: number;
    visfat: number;
    waterRate: number;
    waterMass: number;
    bmr: number;
    skeletalMuscleRate: number;
    skeletalMuscleMass: number;
    muscleMass: number;
    muscleRate: number;
    lbm: number;
    bone: number;
    proteinRate: number;
    proteinMass: number;
    score: number;
    bodyAge: number;
    bodyShape: number;
    private generateData;
}
