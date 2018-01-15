import { Component, OnInit } from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  /**
   * 这个字段是保存着table的自定义列标签
   */
  _titles: Array<any> = [
    {
      key: 'id',
      name: 'ID'
    },
    // {
    //   key:'type',
    //   name:'摄像头类型'
    // },
    {
      key: 'name',
      name: '摄像头名称'
    },
    /*{
     key:'serialNum',
     name:'序列号'
     },*/
    {
      key: 'ip',
      name: '相机ip'
    },
    {
      key: 'direction',
      name: '方向'
    },
    {
      key: 'analyserID',
      name: '分析仪ID'
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
      key: 'rtspPort',
      name: 'Rtsp端口'
    },
    {
      key: 'rtspPath',
      name: 'resp路径'
    },
    {
      key: 'camInfo',
      name: '摄像头品牌'
    }
  ];

  /**
   * isEdit 和 isAdd 这两个属性维护着当前模态框是编辑还是新增
   */
  isEdit = false;
  isAdd = false;

  /**
   * 这里存放着table需要的数据
   */
  _dataSet = [];

  /**
   * 这里存放着从服务端接收到的数据，模态框需要
   */
  formData = {};

  /**
   * 这个方法是订阅的子组件传进来的事件,当子组件触发的时候就会获取到值value
   */
  getRowData(value) {
    /**
     * 这里判断拿出的value是否是undefined，如果是就按新增处理，否则就是编辑
     */
    console.log(value);
    /**
     * 首先要讲formData的脏值清空
     */
    this.formData = {};
    /**
     * 然后将拿到的最新值赋值到formData
     */
    this.formData  = Object.assign({}, value );
    /**
     * 如果value有值那就是表明当前是编辑状态，否则说明是新增
     */
    if (!value) {
      this.isAdd = true;
    }else {
      this.isEdit = true;
    }
  }

  /**
   * 这里是关模态框调用的方法,关闭也有两种状态,可能是编辑或者新增
   */
  close() {
    if (this.isEdit) {
      this.isEdit = !this.isEdit;
    } else if (this.isAdd) {
      this.isAdd = !this.isAdd;
    }
  }

  /**
   * 删除功能处理  在这里调用删除的接口，给后台发送一个ID，应该用post，只有id查询是get，其他操作都用post
   */
  deleteRow(data) {
    console.log(data);
    this.http.get(api.deleteCamera + '?id=' + data.id).subscribe((res) => {
      /**
       * 删除成功之后，调用查询方法，更新页面
       */
      this.getCamera();
    }, (error) => {
      /**
       * 删除失败之后，调用查询方法，更新页面
       */
      this.getCamera();
    });
  }

  /**
   * 增加或者编辑保存点击提交之后调用的方法
   */
  sendData(data) {
    /**
     在这里做请求操作，请求的时候判断一下是新增还是修改，根据isEdit和isAdd的值判断
     */
    if (this.isAdd) {
      this.http.post(api.addCamera, data , {headers: new HttpHeaders({
          /**
           * 添加这个头部说明，前端需要接收的是json数据
           */
        })}).subscribe((res) => {
        this.getCamera();
      }, (error) => {
        this.getCamera();
      });
      this.isAdd = false;
    }else if (this.isEdit) {
      this.http.post(api.editCamera, data , {headers: new HttpHeaders({
          'Content-type' : 'application/json;charset=UTF-8'
        })}).subscribe((res) => {
        this.getCamera();
      }, (error) => {
        this.getCamera();
      });
      this.isEdit = false;
    }
  }

  constructor(private http: HttpClient) {
  }

  /**
   * 在这里调用刷新,点击刷新按钮之后就会调用这个方法,刷新就是调用一次查询接口
   */
  refresh(e) {
    this.getCamera();
  }

  /**
   *  查询数据,调用查询接口
   */
  getCamera() {
    this.http.get(api.queryCamera).subscribe((res) => {
      console.dir(res);
      /**
       * 查询到结果之后将拿到的res赋值给_dataSet才能显示到table
       */
      let list = <any>res;
      this._dataSet = list;
    });
  }


  /**
   * 组件初始化的时候调用一次
   */
  ngOnInit() {
    this.getCamera();
  }
}



