import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
    {
      fieldName: 'name',
      options: [
        {validCondition: 'required', info: '名字不能为空'},
        {validCondition: 'maxlength', info: '名字长度不能大22'}
      ]
    },
    {
      fieldName: 'gender',
      options: [
        {validCondition: 'required', info: '性别不能为空'}
      ]
    },
    {
      fieldName: 'type',
      options: [
        {validCondition: 'required', info: '证件类型不能为空'}
      ]
    },
    {
      fieldName: 'code',
      options: [
        {validCondition: 'required', info: '证件号码不能为空'},
        {validCondition: 'maxlength', info: '名字长度不能大25'}
      ]
    },
    {
      fieldName: 'path',
      options: [
        {validCondition: 'required', info: '文件必须上传'},
        {validCondition: 'maxlength', info: '文件路径长度不能大200'}
      ]
    },
    {
      fieldName: 'phoneno',
      options: [
        {validCondition: 'maxlength', info: '电话长度不能大25'}
      ]
    },
    {
      fieldName: 'address',
      options: [
        {validCondition: 'maxlength', info: '名字长度不能大100'}
      ]
    },
    {
      fieldName: 'dc',
      options: [
        {validCondition: 'required', info: '危险等级不能为空'}]
    },
    {
      fieldName: 'faceLibid',
      options: [
        {validCondition: 'required', info: '请选择人脸库'}
      ]
    }
  ]
;
