import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: 'name',
    options: [
      {validCondition: 'required', info: '参数名不能为空'},
      {validCondition: 'maxlength', info: '参数名长度不能大25'}
    ]
  },
  {
    fieldName: 'value',
    options: [
      {validCondition: 'required', info: '参数值不能为空'},
      {validCondition: 'maxlength', info: '参数值长度不能大于250'}
    ]
  },
  {
    fieldName: 'type',
    options: [
      {validCondition: 'required', info: '参数类型不能为空'}
    ]
  },
  {
    fieldName: 'description',
    options: [
      {validCondition: 'maxlength', info: '描述长度不能大于25'}
    ]
  }
];
