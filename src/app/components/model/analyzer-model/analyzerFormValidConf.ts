export const validOptions = [
  {
    fieldName: 'name', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '名称不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxlength', info: '人脸库名称长度不能大于25'}
    ]
  },
  {
    fieldName: 'ip', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: 'IP不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxlength', info: 'IP长度不能大于40'}
    ]
  },
  {
    fieldName: 'port', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '端口不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'pattern', info: '端口必须为数字！'}
    ]
  },
  {
    fieldName: 'state', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '状态不能为空'          //如果验证出错提示的信息
      }
    ]
  }
];
