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
  _dataSet = [];

  formData = {};


  getRowData(value){
    this.formData = {};
    this.formData  = Object.assign({},value);
    this.isEdit = true;
  };
  sendData(data){
    console.log(data);
    //在这里做请求操作
    this.http.post(api.editCamera,data,{headers:new HttpHeaders({
      'Content-type':'application/json;charset=UTF-8'
    })}).subscribe((res)=>{
      console.log(res);
      this.getCamera();
    },(error)=>{
      this.getCamera();
    });
    this.isEdit = false;
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

