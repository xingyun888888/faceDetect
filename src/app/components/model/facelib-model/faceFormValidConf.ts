export const validOptions = [
  {
    fieldName: 'name', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '人脸库名称不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxlength', info: '人脸库名称长度不能大于10'}
    ]
  },
  {
    fieldName: 'path', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '库路径不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'maxLength', info: '库路径长度不能大于200'}
    ]
  },
  {
    fieldName: 'createTime', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '创建时间不能为空'          //如果验证出错提示的信息
      }
    ]
  },
  {
    fieldName: 'maxNum', //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: 'required', //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: '最大人脸数不能为空'          //如果验证出错提示的信息
      },
      {validCondition: 'pattern', info: '最大人脸数必须为数字！'}
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
