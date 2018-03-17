export const validOptions = [
  {
    fieldName: "name", //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: "required", //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: "姓名不能为空"          //如果验证出错提示的信息
      },
      {validCondition: "maxlength", info: "姓名长度不能大于6"}
    ]
  },
  {
    fieldName: "path", //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: "required", //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: "路径不能为空"          //如果验证出错提示的信息
      }
    ]
  },
  {
    fieldName: "maxNum", //字段的名字对应的是模板里面formControllName;
    options: [
      {
        validCondition: "required", //这是验证条件 required 需要注意的是maxLength对应的是maxlength;
        info: "最大人脸数不能为空"          //如果验证出错提示的信息
      },
      {validCondition: "pattern", info: "最大人脸数必须为数字！"}
    ]
  }
]
