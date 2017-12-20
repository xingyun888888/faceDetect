import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  _titles: Array<any> = [
    {
      key:'id',
      name:'ID'
    },
    {
      key:'name',
      name:'姓名'
    },
    {
      key:"displayName",
      name:"显示名"
    },
    {
      key:"pwd",
      name:"密码"

    },
    {
      key:"module",
      name:"模块名"
    },
    {
      key:"role",
      name:"角色"
    },
    {
      key:"isEnable",
      name:"是否使用"

    },
    {
      key:"state",
      name:"目前状态"
    },

  ]
  isEdit = false;
  _dataSet = [];

  _formData = {}


  getRowData(value){
    debugger;
    this._formData = value;
    this.isEdit = true;
  }


  sendData(data){
    debugger;
    console.log(data);

    //在这里做请求操作


    this.isEdit = false;
  }
  constructor(private http: HttpClient,){

  }

  ngOnInit() {
    this.http.get('/api/bioauth/test').subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      console.dir(res);
      this._dataSet = list;
    })
  }

}

