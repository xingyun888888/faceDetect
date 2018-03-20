import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: 'ip',
    options: [
      {validCondition: 'required', info: '摄像头IP地址不能为空'},
      {validCondition: 'maxlength', info: '摄像头IP地址长度不能大25'}
    ]
  },
  {
    fieldName: 'port',
    options: [
      {validCondition: 'required', info: '摄像头端口号不能为空'},
      {validCondition: 'maxlength', info: '摄像头端口号长度不能大于5'},
      {validCondition: 'pattern', info: '摄像头端口号必须是数字'}
    ]
  },
  {
    fieldName: 'state',
    options: [
      {validCondition: 'required', info: '状态不能为空'}
    ]
  },
  {
    fieldName: 'type',
    options: [
      {validCondition: 'required', info: '类型不能为空'}
    ]
  }
];
