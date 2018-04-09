import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: 'name', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '策略名称不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxlength', info: '策略名称长度不能大于22'}
    ]
  },
  {
    fieldName: 'description',
    options: [
      {validCondition: 'maxlength', info: '描述长度不能大于10'}]
  },
  {
    fieldName: 'sTime',
    options: [
      {validCondition: 'required', info: '开始时间不能为空'}
    ]
  },
  {
    fieldName: 'eTime',
    options: [
      {validCondition: 'required', info: '结束时间不能为空'}
    ]
  },
  {
    fieldName: 'minAlarmThreshold',
    options: [
      {validCondition: 'required', info: '最小识别阀值不能为空'},
      {validCondition: 'pattern', info: '最小识别阀值必须是数字'}
    ]
  },
  {
    fieldName: 'minPixel',
    options: [
      {validCondition: 'required', info: '最小像素大小不能为空'},
      {validCondition: 'maxlength', info: '最小像素大小必须是数字'}
    ]
  },
  {
    fieldName: 'PQ',
    options: [
      {validCondition: 'required', info: '人脸图像质量不能为空'},
      {validCondition: 'pattern', info: '人脸图像质量必须是数字'}
    ]
  }
];
