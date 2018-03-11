"use strict";
var devSeverAddress = 'http://localhost:8080/faceDetect/';
//const devServerAddress = "http://www.adding360.com:8080/bioauth/"
var api = {
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
    //参数信息查询
    queryParam: devSeverAddress + 'param/list',
    editParam: devSeverAddress + 'param/update',
    deleteParam: devSeverAddress + 'param/delete',
    addParam: devSeverAddress + 'param/add',
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
    batchUpload: devSeverAddress + 'register/batchUpload',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = api;
