import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import api from "../../api";
import {Store} from '@ngrx/store';
import * as fromRoot from '@app-root-store';
import * as actions from './../../store/actions';
import {Observable} from 'rxjs/Observable';

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

  formData = {}


  getRowData(value){
    this.formData = {};
    this.formData  = Object.assign({},value);
    this.isEdit = true;
  }


  sendData(data){
    console.log(data);
    //在这里做请求操作
    this.http.post(api.editUserInfo,data,{headers:new HttpHeaders({
      "Content-type":"application/json;charset=UTF-8"
    })}).subscribe((res)=>{
      console.log(res);
      this.getUserInfo();
    },(error)=>{
      this.getUserInfo();
    })


    this.isEdit = false;
  }
  constructor(private http: HttpClient,){

  }

  /**
   * 刷新数据
   */
  refresh(e){
    this.getUserInfo();
  }



  getUserInfo(){
    this.store.dispatch(new actions.setLoadingState(true));
    this.http.get(api.queryUserInfo).subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      this._dataSet = list;
      this.store.dispatch(new actions.setLoadingState(false));
    },(error)=>{
      let list = [{
        id:1,
        name:"默认数据",
        dispalyName:"默认数据",
        pwd:"默认数据",
        module:"默认数据",
        role:"1",
        isEnable:1,
        state:"1"
      }]
      this._dataSet = list;
    })
  }



  ngOnInit() {
    this.getUserInfo();
  }

}



