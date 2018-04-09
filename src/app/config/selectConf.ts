/***********  证件配置  ************/
export const certTypeOptions = [{id: 1, name: '身份证', value: 1}, {id: 2, name: '港澳通行证', value: 2}, {id: 3, name: '护照', value: 3}];

/***********  性别配置  ************/
export const genderOptions = [{id: 1, name: '男', value: 1}, {id: 2, name: '女', value: 2}];

/***********  危险级别配置  ************/
export const dangerOptions = [{id: 1, name: '低', value: 1}, {id: 2, name: '中', value: 2}, {id: 3, name: '高', value: 3}];

/***********  状态配置  ************/
export const stateOptions = [{id: 1, name: '启用', value: 1}, {id: 2, name: '未启用', value: 2}];

/***********  摄像头类型(因为数据库是varchar，所以直接存文字)************/
export const cameraTypeOptions = [{id: '枪机', name: '枪机'}, {id: '球机', name: '球机'}, {id: '其它', name: '其它'}];
/***********  摄像头状态  ************/
export const cameraStateOptions = [{id: 1, name: '启用', value: 1}, {id: 2, name: '未启用', value: 2}];
/***********  流媒体类型  ************/
export const streamTypeOptions = [{id: 1, name: 'H264', value: 1}, {id: 2, name: 'H265', value: 2}];

/***********  服务器管理 服务器类型************/
export const serverTypeOptions = [
  {id: 1, name: '人脸检测', value: 1},
  {id: 2, name: '人脸识别', value: 2},
  {id: 3, name: '人型分析', value: 3},
  {id: 4, name: '跟踪', value: 4}];

/***********  人脸库状态配置  ************/
export const faceStateOptions = [{id: 1, name: '启用', value: 1}, {id: 2, name: '未启用', value: 2}];


/***********  分析仪状态配置  ************/
export const analyzerStateOptions = [{id: 1, name: '启用', value: 1}, {id: 2, name: '未启用', value: 2}];

/***********  来源 配置  ************/
export const sourceOptions = [{id: 1, name: 'web', value: 1}, {id: 2, name: 'app', value: 2}, {id: 3, name: '其他', value: 3}];

/***********  用户管理 是否启用 配置  ************/
export const isEnableOptions = [{id: 1, name: '启用', value: 1}, {id: 2, name: '未启用', value: 2}];

/***********  参数类型 配置  ************/
export const paramTypeOptions = [{id: 1, name: '地图', value: 1}, {id: 2, name: 'IP地址', value: 2}, {id: 3, name: '版本', value: 3}];

/***********  布控策略 生效周期 以周为循环  ************/
export class StrategyWeekOptions {
  public data = [
    {label: '周一', value: '1'},
    {label: '周二', value: '2'},
    {label: '周三', value: '3'},
    {label: '周四', value: '4'},
    {label: '周五', value: '5'},
    {label: '周六', value: '6'},
    {label: '周日', value: '7'},
  ];

  constructor() {
  }
}

/***********  报表数据分析 查询周期 配置  ************/
export const timeOptions = [
  {name: '天', id: 1, value: '1'},
  {name: '周', id: 2, value: '2'},
  {name: '月', id: 3, value: '3'},
  {name: '年', id: 4, value: '4'}
];
