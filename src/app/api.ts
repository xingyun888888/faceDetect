const devSeverAddress = 'http://localhost:8080/';

//192.168.1.200 部署之后的web接口
//const devSeverAddress = 'http://192.168.1.200:8088/faceDetect/';

//const devServerAddress = "http://www.adding360.com:8080/bioauth/"
//192.168.1.200 凯强的web接口
//const devSeverAddress = 'http://192.168.7.48:8080/faceDetect/';

const api = {
  //日志信息查询
  queryLog: devSeverAddress + 'log/list',
  deleteLog: devSeverAddress + 'log/delete',
  queryLogByConditions: devSeverAddress + 'log/listByConditions',
  //策略信息查询
  queryStrategy: devSeverAddress + 'strategy/list',
  queryStrategyByConditions: devSeverAddress + 'strategy/listByConditions',
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
  getCameraByStrategy: devSeverAddress + 'camera/getCameraByStrategy',//布控测量中获取相机列表
  alterID: devSeverAddress + 'camera/alterID',
  //据地图id查询对应的摄像头列表
  getCameraOnMap: devSeverAddress + 'camera/getCameraByDistrictID',
  queryMaqipInfoList: devSeverAddress + 'mapInfo/getMapInfo',
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
  //抓拍查询
  querySnapshot: devSeverAddress + 'snapshot/list',
  editSnapshot: devSeverAddress + 'snapshot/update',
  deleteSnapshot: devSeverAddress + 'snapshot/delete',
  addSnapshot: devSeverAddress + 'snapshot/add',
  querySnapshotByConditions: devSeverAddress + 'snapshot/listByConditions',
  //user权限信息查询
  queryUser: devSeverAddress + 'user/list',
  editUser: devSeverAddress + 'user/update',
  deleteUser: devSeverAddress + 'user/delete',
  addUser: devSeverAddress + 'user/add',
  queryUserByConditions: devSeverAddress + 'user/listByConditions',
  checkNameIsExist: devSeverAddress + 'user/checkNameIsExist',

  //参数信息查询
  queryParam: devSeverAddress + 'param/list',
  editParam: devSeverAddress + 'param/update',
  deleteParam: devSeverAddress + 'param/delete',
  addParam: devSeverAddress + 'param/add',
  queryParamByConditions: devSeverAddress + 'param/listByConditions',
  queryParamType: devSeverAddress + 'param/getAllType',
  //获取地图下拉列表
  queryMapList: devSeverAddress + 'param/getParamByType',
  queryMapInfoList: devSeverAddress + 'mapInfo/getMapInfo',
  //导入地图
  // addMap: devSeverAddress + 'param/mapUpload',
  addMap: devSeverAddress + 'mapInfo/mapUpload',

  //注册信息查询
  queryRegister: devSeverAddress + 'register/listById',
  queryRegisterAll: devSeverAddress + 'register/list',
  editRegister: devSeverAddress + 'register/update',
  deleteRegister: devSeverAddress + 'register/delete',
  addRegister: devSeverAddress + 'register/add',
  singleUpload: devSeverAddress + 'register/singleUpload',
  batchUpload: devSeverAddress + 'register/batchUpload',
  deleteRegisterImage: devSeverAddress + 'register/deleteRegisterImage',
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

  // 报表数据分析
  queryReportData: devSeverAddress + 'reportData/listByReportData',

  //数据监控页面接口
  getServerInfo: devSeverAddress + 'datamonitor/getServerInfo',
  getServerListInfo: devSeverAddress + 'datamonitor/getServerListInfo',
  getClientInfo: devSeverAddress + 'datamonitor/getClientInfo',
  //登录
  userLogin: devSeverAddress + 'user/login',
  //分析仪设置
  queryAnalyzer: devSeverAddress + 'analyser/list',
  queryAnalyzerByConditions: devSeverAddress + 'analyser/listByConditions',
  addAnalyser: devSeverAddress + 'analyser/add',
  editAnalyser: devSeverAddress + 'analyser/update',
  deleteAnalyser: devSeverAddress + 'analyser/delete',
};

export default api;





