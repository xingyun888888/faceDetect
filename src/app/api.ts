
const devSeverAddress  = "http://localhost:8080/xface-int1.2.5/";

//const devServerAddress = "http://www.adding360.com:8080/bioauth/"

let api ={
  //个人信息查询
  queryUserInfo:devSeverAddress + "userinfo",
  editUserInfo:devSeverAddress+"userinfo/update",
  deleteUserInfo:devSeverAddress+"userinfo/delete",
  addUserInfo:devSeverAddress+"userinfo/add",
  //相机信息查询
  queryCamera:devSeverAddress + "camera/list",
  editCamera:devSeverAddress+"camera/update",
  deleteCamera:devSeverAddress+"camera/delete",
  addCamera:devSeverAddress+"camera/add"
}

export default api;


