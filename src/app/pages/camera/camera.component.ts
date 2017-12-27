import { Component, OnInit } from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  _titles: Array<any> = [
    {
      key:'id',
      name:'ID'
    },
    // {
    //   key:'type',
    //   name:'摄像头类型'
    // },
    {
      key:'name',
      name:'摄像头名称'
    },
    /*{
     key:'serialNum',
     name:'序列号'
     },*/
    {
      key:'ip',
      name:'相机ip'
    },
    {
      key:'direction',
      name:'方向'

    },
    {
      key:'analyserID',
      name:'分析仪ID'
    },
    /*

     {
     key:'zoneID',
     name:'角色'
     },
     {
     key:'strategyID',
     name:'策略ID'

     },
     {
     key:'doorID',
     name:'门禁ID'
     },
     {
     key:'port',
     name:'端口'
     },

     {
     key:'user',
     name:'用户名'
     },
     {
     key:'pwd',
     name:'密码'
     },*/
    {
      key:'rtspPort',
      name:'Rtsp端口'
    },
    {
      key:'rtspPath',
      name:'resp路径'
    },
    {
      key:'camInfo',
      name:'摄像头品牌'
    }

  ];
  isEdit = false;

  isAdd = false;

  _dataSet = [];

  formData = {};


  getRowData(value){
    /**
     * 这里判断拿出的value是否是undefined
     * 如果是就按新增处理  否则 就是编辑
     *
     */
    console.log(value);
    this.formData = {};
    this.formData  = Object.assign({},value);
    if(!value){
      this.isAdd = true;
    }else{
      this.isEdit = true;
    }
  };

  /**
   * 这里是关模态框调用的方法
   *
   */
  close() {

    if (this.isEdit) {
      this.isEdit = !this.isEdit;
    } else if (this.isAdd) {
      this.isAdd = !this.isAdd;
    }
  }

  /**
   *
   * 删除功能处理  在这里调用删除的接口
   * 删除要接收什么参数 ？？？给后台发送一个ID就好  应该用post  只有id查询 是get  其他操作都用post en
   * @param data
   */
  deleteRow(data){
    console.log(data);
    this.http.get(api.deleteCamera+"?id="+data.id).subscribe((res)=>{
      this.getCamera();
    },(error)=>{
      this.getCamera();
    });
  }
  sendData(data){
    /**
     *
     在这里做请求操作
     请求的时候同样判断一下 当前是新增操作还是修改操作
     根据 isEdit 和 isAdd的值判断
     *
     */
    if(this.isAdd){
      this.http.post(api.addCamera,data,{headers:new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res)=>{
        this.getCamera();
      },(error)=>{
        this.getCamera();
      });
      this.isAdd = false;
    }else if(this.isEdit){
      this.http.post(api.editCamera,data,{headers:new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res)=>{
        this.getCamera();
      },(error)=>{
        this.getCamera();
      });
      this.isEdit = false;
    }

  }
  constructor(private http: HttpClient,){

  }

  getCamera(){
    this.http.get(api.queryCamera).subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      this._dataSet = list;
    });
  }

  ngOnInit() {
    this.getCamera();
  }

}


