import {Validators} from '@angular/forms';

/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: 'type', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '摄像机类型不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxlength', info: '摄像机类型长度不能大于25'}
    ]
  },
  {
    fieldName: 'name',
    options: [
      {validCondition: 'required', info: '摄像机名称不能为空'},
      {validCondition: 'maxlength', info: '摄像机名称长度不能大于10'}]
  },
  {
    fieldName: 'serialNum',
    options: [
      {validCondition: 'required', info: '序列号不能为空'},
      {validCondition: 'maxlength', info: '序列号长度不能大于25'}
    ]
  },
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
    fieldName: 'mediaIP',
    options: [
      {validCondition: 'required', info: '流媒体IP不能为空'},
      {validCondition: 'maxlength', info: '流媒体IP长度不能大于25'}
    ]
  },
  {
    fieldName: 'mediaPort',
    options: [
      {validCondition: 'required', info: '流媒体端口号不能为空'},
      {validCondition: 'maxlength', info: '流媒体端口号长度不能大于5'},
      {validCondition: 'pattern', info: '流媒体端口号必须是数字'}
    ]
  },
  {
    fieldName: 'direction',
    options: [
      {validCondition: 'required', info: '方向不能为空'},
      {validCondition: 'maxlength', info: '方向长度不能大于25'}
    ]
  },
  {
    fieldName: 'user',
    options: [
      {validCondition: 'required', info: '用户名不能为空'},
      {validCondition: 'maxlength', info: '用户名长度不能大于10'}
    ]
  },
  {
    fieldName: 'pwd',
    options: [
      {validCondition: 'required', info: '密码不能为空'},
      {validCondition: 'maxlength', info: '密码长度不能大于9'}
    ]
  },
  {
    fieldName: 'rtspPath',
    options: [
      {validCondition: 'required', info: 'rtsp路径不能为空'},
      {validCondition: 'maxlength', info: 'rtsp路径长度不能大于200'}
    ]
  },
  {
    fieldName: 'camInfo',
    options: [
      {validCondition: 'maxlength', info: '摄像头品牌长度不能大于25'}
    ]
  },
  {
    fieldName: 'camMapX',
    options: [
      {validCondition: 'required', info: 'x轴坐标不能为空'},
      {validCondition: 'maxlength', info: 'x轴坐标长度不能大于5'}
    ]
  },
  {
    fieldName: 'camMapY',
    options: [
      {validCondition: 'required', info: 'y轴坐标不能为空'},
      {validCondition: 'maxlength', info: 'y轴坐标长度不能大于5'}
    ]
  },
  {
    fieldName: 'camState',
    options: [
      {validCondition: 'required', info: '摄像头状态不能为空'},
      {validCondition: 'maxlength', info: '摄像头状态长度不能大于5'}
    ]
  },
  {
    fieldName: 'streamType',
    options: [
      {validCondition: 'required', info: '流媒体类型不能为空'}
    ]
  },
  {
    fieldName: 'districtName',
    options: [
      {validCondition: 'required', info: '区域名称不能为空'},
      {validCondition: 'maxlength', info: '区域名称长度不能大于22'}
    ]
  },
  {
    fieldName: 'area',
    options: [
      {validCondition: 'required', info: '摄像头区域不能为空'},
      {validCondition: 'maxlength', info: '摄像头区域长度不能大于25'}
    ]
  },
  {
    fieldName: 'areaID',
    options: [
      {validCondition: 'required', info: '一级区域ID不能为空'},
      {validCondition: 'maxlength', info: '一级区域ID长度不能大于5'}
    ]
  },
  {
    fieldName: 'areaName',
    options: [
      {validCondition: 'required', info: '一级区域名称不能为空'},
      {validCondition: 'maxlength', info: '一级区域名称长度不能大于22'}
    ]
  },
  {
    fieldName: 'distictUrl',
    options: [
      {validCondition: 'required', info: '地图路径不能为空'},
      {validCondition: 'maxlength', info: '地图路径长度不能大于22'}
    ]
  }
];
