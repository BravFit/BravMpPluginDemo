const { sealGenderParam, isValidEightMeasure } = require('../../utils/util');

// 指标图标名称对应
const iconNames = {
  'fer-Weight': 'report_weight',
  'fer-Stature': 'report_stature',
  'fer-WeightControl': 'report_weightControl',
  'fer-FatControl': 'report_fatControl',
  'fer-SinewControl': 'report_sinewControl',
  'fer-BMR': 'report_bmr',
  'fer-BestVisualWeight': 'report_bestVisualWeight',
  'fer-Bodyfat': 'report_bodyfat',
  'fer-BodyfatMass': 'report_bodyfatMass',
  'fer-BMI': 'report_bmi',
  'fer-BodyAge': 'report_bodyage',
  'fer-BodyShape': 'report_bodyshape',
  'fer-Bone': 'report_bone',
  'fer-HeartIndex': 'report_heart_index',
  'fer-HeartRate': 'report_heart_rate',
  'fer-LBM': 'report_lbm',
  'fer-MineralSalt': 'report_mineralSalt',
  'fer-Muscle': 'report_muscle',
  'fer-Sinew': 'report_muscle_mass',
  'fer-SinewRate': 'report_sinewRate',
  'fer-Obesity': 'report_obesity',
  'fer-Protein': 'report_protein',
  'fer-ProteinMass': 'report_proteinMass',
  'fer-Score': 'report_score',
  'fer-StandardWeight': 'report_standardWeight',
  'fer-Subfat': 'report_subfat',
  'fer-Visfat': 'report_visfat',
  'fer-Water': 'report_water',
  'fer-WaterMass': 'report_waterMass',
  'fer-FattyLiver': 'report_fattyLiver',
};

Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    measure: {
      type: Object,
      value: {},
    },
    hideNameDes: {
      type: Boolean,
      value: false,
    },
    eightMeasureData: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconNames,
  },

  /**
   * 组件的方法列表
   */

  observers: {
    measure: function (data) {
      if (!data) return;
    },
  },

  methods: {
    //点击列表显示隐藏
    onClickToggleExtend: function (e: any) {
      const { measure } = this.data;
      const index = e.currentTarget.dataset.index;
      if (!measure[index].desc && !measure[index].boundaries) return;
      measure[index].isExtend = !measure[index].isExtend;
      this.setData({
        measure,
      });
    },
    
  },
});
