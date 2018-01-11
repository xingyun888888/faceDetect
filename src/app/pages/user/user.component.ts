import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import api from '../../api';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
      key:'displayName',
      name:'显示名'
    },
    {
      key:'pwd',
      name:'密码'

    },
    {
      key:'module',
      name:'模块名'
    },
     {
     key:'role',
     name:'角色'
     },
     {
     key:'isEnable',
     name:'是否使能'
     },
    {
      key:'state',
      name:'状态'
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
   * 删除功能处理  在这里调用删除的接口
   * 删除要接收什么参数 ？？？给后台发送一个ID就好  应该用post  只有id查询 是get  其他操作都用post en
   * @param data
   */
  deleteRow(data){
    console.log(data);
    this.http.get(api.deleteUser+"?id="+data.id).subscribe((res)=>{
      this.getUser();
    },(error)=>{
      this.getUser();
    });
  }

  sendData(data){
    /**
     在这里做请求操作
     请求的时候同样判断一下 当前是新增操作还是修改操作
     根据 isEdit 和 isAdd的值判断
     */
    if(this.isAdd){
      this.http.post(api.addUser,data,{headers:new HttpHeaders({
          'Content-type':'application/json;charset=UTF-8'
        })}).subscribe((res)=>{
        this.getUser();
      },(error)=>{
        this.getUser();
      });
      this.isAdd = false;
    }else if(this.isEdit){
      this.http.post(api.editUser,data,{headers:new HttpHeaders({
          'Content-type':'application/json;charset=UTF-8'
        })}).subscribe((res)=>{
        this.getUser();
      },(error)=>{
        this.getUser();
      });
      this.isEdit = false;
    }
  }
  constructor(private http: HttpClient,){
  }

  /**
   * 在这里调用刷新
   */
  refresh(e){
    this.getUser();
  }

  getUser(){
    this.http.get(api.queryUser).subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      this._dataSet = list;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}
