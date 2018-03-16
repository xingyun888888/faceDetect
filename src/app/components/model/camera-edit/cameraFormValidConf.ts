/**
 * Created by smileMAC on 3/16/18.
 */
/**
 * 表单验证以及错误信息配置项
 * @type {[{fieldName: string; options: [{validCondition: string; info: string},{key: string; info: string}]}]}
 */
export const validOptions = [
  {
    fieldName: "type",
    options: [
      {validCondition: "required", info: "姓名不能为空"},
      {validCondition: "maxlength", info: "姓名长度不能大于2"}
    ]
  },
  {
    fieldName: "name",
    options: [
      {validCondition: "required", info: "摄像头类型不能为空"},
      {validCondition: "maxlength", info: "摄像头类型长度不能大于10"}]
  },
  {
    fieldName: "serialNum",
    options: [{validCondition: "required", info: "序列号不能为空"}, {validCondition: "maxlength", info: "序列号名称长度不能大于25"}]
  },
  {
    fieldName: "ip",
    options: [
      {validCondition: "required", info: "ip地址不能为空"},
      {validCondition: "maxlength", info: "ip地址长度不能大25"},
      {validCondition:"pattern",info:"ip必须是数字"}
      ]
  },
  {
    fieldName: "port",
    options: [{validCondition: "required", info: "端口号不能为空"}, {validCondition: "maxlength", info: "端口号长度不能大于5"}]
  },
  {
    fieldName: "mediaIP",
    options: [{validCondition: "required", info: "流媒体IP不能为空"}, {validCondition: "maxlength", info: "流媒体IP长度不能大于3"}]
  },
  {
    fieldName: "mediaPort",
    options: [{validCondition: "required", info: "流媒体端口号不能为空"}, {validCondition: "maxlength", info: "流媒体端口号长度不能大于3"},{validCondition:"pattern",info:"流媒体端口号必须是数字"}]
  },
  {
    fieldName: "direction",
    options: [{validCondition: "required", info: "方向不能为空"}, {validCondition: "maxlength", info: "方向长度不能大于25"}]
  },
  {
    fieldName: "analyserID",
    options: [{validCondition: "required", info: "区域ID不能为空"}, {validCondition: "maxlength", info: "区域ID长度不能大于3"}]
  },
  {fieldName: "pwd", options: [{validCondition:"pattern",info:"密码必须是数字"},{validCondition: "required", info: "密码不能为空"}, {key: "maxlength", info: "密码长度不能大于9"}]},
  // {
  //   fieldName: "rtspPort",
  //   options: [{validCondition:"pattern",info:"rtsp端口必须是数字"},{validCondition: "required", info: "rtsp端口不能为空"}, {validCondition: "maxlength", info: "rtsp端口长度不能大于5"}]
  // },
  {
    fieldName: "rtspPath",
    options: [{validCondition: "required", info: "resp路径不能为空"}, {validCondition: "maxlength", info: "resp路径长度不能大于100"}]
  },
  {
    fieldName: "camInfo",
    options: [{validCondition: "required", info: "摄像头品牌不能为空"}, {validCondition: "maxlength", info: "摄像头品牌长度不能大于3"}]
  },
  {
    fieldName: "camMapX",
    options: [{validCondition: "required", info: "x轴坐标不能为空"}, {validCondition: "maxlength", info: "x轴坐标长度不能大于3"}]
  },
  {
    fieldName: "camMapY",
    options: [{validCondition: "required", info: "y轴坐标不能为空"}, {validCondition: "maxlength", info: "y轴坐标长度不能大于3"}]
  },
  {
    fieldName: "camState",
    options: [{validCondition: "required", info: "摄像头状态不能为空"}, {validCondition: "maxlength", info: "摄像头状态长度不能大于3"}]
  },
  {
    fieldName: "streamType",
    options: [{validCondition: "required", info: "流媒体类型不能为空"}, {validCondition: "maxlength", info: "流媒体类型长度不能大于3"}]
  },
  {
    fieldName: "districtName",
    options: [{validCondition: "required", info: "区域名称不能为空"}, {validCondition: "maxlength", info: "区域名称长度不能大于22"}]
  },
  {
    fieldName: "area",
    options: [{validCondition: "required", info: "area不能为空"}, {validCondition: "maxlength", info: "area长度不能大于25"}]
  },
  {
    fieldName: "areaID",
    options: [{validCondition: "required", info: "areaID不能为空"}, {validCondition: "maxlength", info: "areaID长度不能大于3"}]
  },
  {
    fieldName: "areaName",
    options: [{validCondition: "required", info: "areaName不能为空"}, {
      validCondition: "maxlength",
      info: "areaName长度不能大于3"
    }]
  },
  {
    fieldName: "distictUrl",
    options: [{validCondition: "required", info: "distictUrl不能为空"}, {
      validCondition: "maxlength",
      info: "distictUrl长度不能大于22"
    }]
  }
]
