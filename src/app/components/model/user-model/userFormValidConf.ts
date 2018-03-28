import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: 'name',
    options: [
      {validCondition: 'required', info: '用户名不能为空'},
      {validCondition: 'maxlength', info: '用户名长度不能大10'}
    ]
  },
  {
    fieldName: 'displayName',
    options: [
      {validCondition: 'required', info: '姓名不能为空'},
      {validCondition: 'maxlength', info: '姓名长度不能大于10'}
    ]
  },
  {
    fieldName: 'pwd',
    options: [
      {validCondition: 'required', info: '密码不能为空'},
      {validCondition: 'maxlength', info: '密码不能大于10'}
    ]
  },
  {
    fieldName: 'isEnable',
    options: [
      {validCondition: 'required', info: '是否可用不能为空'}
    ]
  }
];
