import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import api from '../../api';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  _titles: Array<any> = [
    {
      key:'id',
      name:'ID'
    },
    {
      key:'ip',
      name:'IP地址'
    },
    {
      key:"port",
      name:"端口"
    },
    {
      key:"state",
      name:"状态"

    },
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
    this.http.get(api.deleteServer+"?id="+data.id).subscribe((res)=>{
      this.getServer();
    },(error)=>{
      this.getServer();
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
      this.http.post(api.addServer,data,{headers:new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res)=>{
        this.getServer();
      },(error)=>{
        this.getServer();
      });
      this.isAdd = false;
    }else if(this.isEdit){
      this.http.post(api.editServer,data,{headers:new HttpHeaders({
        'Content-type':'application/json;charset=UTF-8'
      })}).subscribe((res)=>{
        this.getServer();
      },(error)=>{
        this.getServer();
      });
      this.isEdit = false;
    }

  }
  constructor(private http: HttpClient,){

  }

  getServer(){
    this.http.get(api.queryServer).subscribe((res)=>{
      console.dir(res);
      let list = <any>res;
      this._dataSet = list;
    });
  }

  ngOnInit() {
    this.getServer();
  }

}

