const devSeverAddress = 'http://localhost:8080/faceDetect/';

//192.168.1.200 部署之后的web接口
//const devSeverAddress = 'http://192.168.1.200/faceDetect/';

//const devServerAddress = "http://www.adding360.com:8080/bioauth/"

const api = {
  //日志信息查询
  queryLog: devSeverAddress + 'log/list',
  deleteLog: devSeverAddress + 'log/delete',
  queryLogByConditions: devSeverAddress + 'log/listByConditions',
  //策略信息查询
  queryStrategy: devSeverAddress + 'strategy/list',
  editStrategy: devSeverAddress + 'strategy/update',
  deleteStrategy: devSeverAddress + 'strategy/delete',
  addStrategy: devSeverAddress + 'strategy/add',
  //个人信息查询
  queryUserInfo: devSeverAddress + 'userinfo',
  editUserInfo: devSeverAddress + 'userinfo/update',
  deleteUserInfo: devSeverAddress + 'userinfo/delete',
  addUserInfo: devSeverAddress + 'userinfo/add',
  //相机信息查询
  queryCamera: devSeverAddress + 'camera/list',
  editCamera: devSeverAddress + 'camera/update',
  deleteCamera: devSeverAddress + 'camera/delete',
  addCamera: devSeverAddress + 'camera/add',
  queryCameraByConditions: devSeverAddress + 'camera/listByConditions',
  //据地图id查询对应的摄像头列表
  getCameraOnMap: devSeverAddress + 'camera/getCameraByDistrictID',
  //分析仪名称查询
  queryAnalyserName: devSeverAddress + 'analyser/getNameList',
  //服务端信息查询
  queryServer: devSeverAddress + 'server/list',
  editServer: devSeverAddress + 'server/update',
  deleteServer: devSeverAddress + 'server/delete',
  addServer: devSeverAddress + 'server/add',
  queryServerByConditions: devSeverAddress + 'server/listByConditions',
  //客户端信息查询
  queryMobile: devSeverAddress + 'mobile/list',
  editMobile: devSeverAddress + 'mobile/update',
  deleteMobile: devSeverAddress + 'mobile/delete',
  addMobile: devSeverAddress + 'mobile/add',
  //人脸库查询
  queryFacelib: devSeverAddress + 'facelib/list',
  editFacelib: devSeverAddress + 'facelib/update',
  deleteFacelib: devSeverAddress + 'facelib/delete',
  addFacelib: devSeverAddress + 'facelib/add',
  queryFacelibName: devSeverAddress + 'facelib/getNameList',
  queryFacelibByConditions: devSeverAddress + 'facelib/listByConditions',

  //告警信息查询
  queryRecognize: devSeverAddress + 'recognize/list',
  editRecognize: devSeverAddress + 'recognize/update',
  deleteRecognize: devSeverAddress + 'recognize/delete',
  addRecognize: devSeverAddress + 'recognize/add',
  queryRecognizeByConditions: devSeverAddress + 'recognize/listByConditions',
  //user权限信息查询
  queryUser: devSeverAddress + 'user/list',
  editUser: devSeverAddress + 'user/update',
  deleteUser: devSeverAddress + 'user/delete',
  addUser: devSeverAddress + 'user/add',
  queryUserByConditions: devSeverAddress + 'user/listByConditions',
  //参数信息查询
  queryParam: devSeverAddress + 'param/list',
  editParam: devSeverAddress + 'param/update',
  deleteParam: devSeverAddress + 'param/delete',
  addParam: devSeverAddress + 'param/add',
  queryParamByConditions: devSeverAddress + 'param/listByConditions',
  //获取地图下拉列表
  queryMapList: devSeverAddress + 'param/getParamByType',
  //导入地图
  addMap: devSeverAddress + 'param/mapUpload',
  //注册信息查询
  queryRegister: devSeverAddress + 'register/listById',
  queryRegisterAll: devSeverAddress + 'register/list',
  editRegister: devSeverAddress + 'register/update',
  deleteRegister: devSeverAddress + 'register/delete',
  addRegister: devSeverAddress + 'register/add',
  uploadImg: devSeverAddress + 'register/upload',
  queryRegisterByConditions: devSeverAddress + 'register/listByConditions',
  //注册信息数据报表分析
  queryRegisterDayCount: devSeverAddress + 'register/listByDay',
  queryRegisterWeekCount: devSeverAddress + 'register/listByWeek',
  queryRegisterMonthCount: devSeverAddress + 'register/listByMonth',
  //serverLoad数据报表分析
  queryServerLoadDayCount: devSeverAddress + 'serverLoad/listByDay',
  queryServerLoadWeekCount: devSeverAddress + 'serverLoad/listByWeek',
  queryServerLoadMonthCount: devSeverAddress + 'serverLoad/listByMonth',
  //识别信息数据报表分析
  queryRecognizeLoadDayCount: devSeverAddress + 'recognize/listByDay',
  queryRecognizeWeekCount: devSeverAddress + 'recognize/listByWeek',
  queryRecognizeMonthCount: devSeverAddress + 'recognize/listByMonth',


  batchUpload: devSeverAddress + 'register/batchUpload',
};

export default api;





