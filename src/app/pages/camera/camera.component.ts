import {Component, OnInit} from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {parseParam} from '../../../../../../../Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/304449468c1ebeef83dede76d4934fd9/Message/MessageTemp/e5545a12234a7e9f9b0bf68b2a123e51/File/src/app/utils/common';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.less']
})
export class CameraComponent implements OnInit {
  /**这个字段是保存着search的自定义列标签*/
  _searchTitle: Array<any> = [
    {key: 'name', name: '摄像机名称', type: '', nzSpan: 7},
    {key: 'direction', name: '方向', type: '', nzSpan: 5}
  ];

  /**这个字段是保存着table的自定义列标签*/
  _titles: Array<any> = [
    {
      key: 'id',
      name: '摄像头编号',
      type: 'text'
    },
    {
      key: 'name',
      name: '摄像头名称',
      type: 'text'
    },
    /*
   {
     key: 'type',
     name: '摄像头类型'
   },
   {
    key:'serialNum',
    name:'序列号'
    },*/
    {
      key: 'ip',
      name: '相机ip',
      type: 'text'
    },
    {
      key: 'direction',
      name: '方向',
      type: 'text'
    },
    {
      key: 'a_name',
      name: '分析仪名称',
      type: 'text'
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
      name: 'rtsp端口',
      type: 'text'
    },
    {
      key: 'rtspPath',
      name: 'resp路径',
      type: 'text'
    },
    {
      key: 'position',
      name: '摄像头坐标',
      type: 'text'
    }
  ];

  /** isEdit 和 isAdd 这两个属性维护着当前模态框是编辑还是新增*/
  isEdit = false;
  isAdd = false;

  /** 这里存放着table需要的数据*/
  _dataSet = [];

  /**这里存放着从服务端接收到的数据，模态框需要*/
  formData = {};

  /**是否加载中,是否显示加载状态,true:代表正在加载中,false:代表加载完成*/
  isLoading = false;

  /** 这个方法是订阅的子组件传进来的事件,当子组件触发的时候就会获取到值value,判断拿出的value是否是undefined,如果是新增处理,否则编辑处理，
   * 首先要把formData的脏值清空，然后将拿到的最新值赋值到formData，如果value有值那就是表明当前是编辑状态，否则说明是新增*/
  getRowData(value) {
    console.log(value);
    this.formData = {};
    this.formData = Object.assign({}, value);
    if (!value) {
      this.isAdd = true;
    } else {
      this.isEdit = true;
    }
  }

  /** 这里是关模态框调用的方法,关闭也有两种状态,可能是编辑或者新增*/
  close() {
    if (this.isEdit) {
      this.isEdit = !this.isEdit;
    } else if (this.isAdd) {
      this.isAdd = !this.isAdd;
    }
  }

  /** 删除功能处理，在这里调用删除的接口，给后台发送一个ID，应该用post，只有id查询是get，其他操作都用post
   * 删除成功之后，调用查询方法，更新页面，删除失败之后，调用查询方法，更新页面*/
  deleteRow(data) {
    this.http.post(api.deleteCamera, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=UTF-8'
      })
    }).subscribe((res) => {
      this.getCamera();
    }, (error) => {
      this.getCamera();
    });
  }

  /** 增加或者编辑操作后点击提交后调用的方法，请求的时候判断一下是新增还是修改，根据isEdit和isAdd的值判断
   * 添加下面的headers头部说明，前端需要接收的是json数据*/
  sendData(data) {
    if (this.isAdd) {
      this.http.post(api.addCamera, data, {
        headers: new HttpHeaders({
          'Content-type': 'application/json;charset=UTF-8'
        })
      }).subscribe((res) => {
        this.getCamera();
      }, (error) => {
        this.getCamera();
      });
      this.isAdd = false;
    } else if (this.isEdit) {
      this.http.post(api.editCamera, data, {
        headers: new HttpHeaders({
          'Content-type': 'application/json;charset=UTF-8'
        })
      }).subscribe((res) => {
        this.getCamera();
      }, (error) => {
        this.getCamera();
      });
      this.isEdit = false;
    }
  }

  constructor(private http: HttpClient) {
  }

  /**在这里调用刷新,点击刷新按钮之后就会调用这个方法,刷新就是调用一次查询接口*/
  refresh(e) {
    this.getCamera();
  }

  /**调用查询接口，查询到结果之后将拿到的res赋值给_dataSet才能显示到table*/
  getCamera() {
    this.isLoading = true;
    this.http.get(api.queryCamera).subscribe((res) => {
      console.dir(res);
      let list = <any>res;
      /**拿到数据之后将analyser对象里的name拿出来，赋值给a_name，这样a_name就有值，就可以显示出来了*/
      list.map((item, index) => {
        Object.assign(item, {a_name: item.analyser.name});
      });
      this._dataSet = list;

      /**关闭加载状态*/
      this.isLoading = false;
    }, () => {
      let list = [
        {
          id: '', name: 'sdf',
          ip: '23', direction: '3',
          type: '3', serialNum: '3',
          zoneID: '3', a_name: '3',
          strategyID: '3',
          doorID: '3',
          port: '3',
          user: '3',
          pwd: '2',
          rtspPort: '3',
          rtspPath: '3',
          position: '100,200',
        }

      ];
      this._dataSet = list;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }

  /**多条件查询方法*/
  queryCameraByConditions(data) {
    console.log(parseParam(data));
    this.http.get(api.queryCameraByConditions + parseParam(data)).subscribe((res) => {
      console.dir(res);
      let list = <any>res;
      list.map((item, index) => {
        Object.assign(item, {a_name: item.analyser.name});
      });
      this._dataSet = list;
    }, (error) => {

    });
  }

  /**组件初始化的时候调用一次*/
  ngOnInit() {
    this.getCamera();
  }
}



