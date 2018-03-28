import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input} from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MapMarkComponent} from '../../components/map-mark/map-mark.component';
import {NzModalService} from 'ng-zorro-antd';
import * as $ from "jquery";
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  isShowUploadModal: boolean = false;
  @Input()
  isShowUpDownModal = true;
  fileName: string="";
  handleMapUploadOk = (e) => {
    this.isShowUploadModal = false;
  }
  handleMapUploadCancel = (e) => {
    console.log(e);
    this.isShowUploadModal = false;
  }
  mapOptions = [];
  mapFileList: Array<any> = [];
  mapName: string = '';
  districtID: any = '';
  areaName:string='';
  districtName:string ='';
  formModel: FormGroup;
  beforeUpload(file) {
    debugger;
    this.mapFileList.push(file);
    debugger;
    console.log(file);
    this.fileName = file.name;
    // $("#inputValue").val(file.name);
    return false;
  }

  constructor(private vcr: ViewContainerRef, private http: HttpClient, private resolver: ComponentFactoryResolver, private confirmServ: NzModalService,fb: FormBuilder) {
    this.beforeUpload = this.beforeUpload.bind(this);
    this.formModel = fb.group(
      {
        fileName: [''],
        districtName: ['']
      });
  }

  ngOnInit() {
    this.getMapList();
  }
  handleMapUpload(e) {
    debugger;
    const formData = new FormData();
    for (let file of this.mapFileList) {
      formData.append('map', file);
      formData.append('mapName', file.name);
      formData.append('areaName',this.areaName);
      formData.append('districtName',this.districtName);
    }
    this.http.post(api.addMap, formData, {
      headers: new HttpHeaders({})
    }).subscribe((event: any) => {
      this.mapFileList = [];
      this.isShowUploadModal = false;
      //上传成功之后再次请求服务器获取最新的地图列表
      this.getMapList();
      debugger;
      this.confirmServ.success({
        content: '上传成功'
      });
    }, (err) => {
      debugger;
      this.mapFileList = [];
      this.isShowUploadModal = false;
      //上传成功之后再次请求服务器获取最新的地图列表
      this.getMapList();
      this.confirmServ.error({
        title: '上传失败'
      });
    });
  }
  cancalMapUpload(e) {
    this.mapFileList = [];
    this.mapName = '';
  }
  /**用来存储当前地图上面在线camera的集合*/
  cameraPositions = [];

  /**绑定视图上面mapImg元素*/
    // @ViewChild('mapImg') mapImg: ElementRef;
  @ViewChild('mapImg', {read: ViewContainerRef}) mapImg: ViewContainerRef;

  /**表示当前选择的floor-map*/
  selectedMap = this.mapOptions[0];
  // selectedMapData=this.mapOptions[0].get
  selectedFloor = this.selectedMap&&this.selectedMap.mapInfoData[0];
  /**
   * 用来存放当前地图上面生成的坐标组件的集合
   * @type {Array}
   */
  allCameraImgNodes: any = [];

  /**初始化当前地图上面的在线camera,在这里接受一个参数res,就是拿到接口返回的response）*/
  initCurrentMapOnlineCamera(res) {
    debugger;
    this.cameraPositions = res;
    res.map((item, index) => {
      let mapMark = this.resolver.resolveComponentFactory(MapMarkComponent);
      let component = this.mapImg.createComponent(mapMark);

      component.instance['left'] = item.camMapX - 16 + 'px';
      component.instance['top'] = item.camMapY - 32 + 'px';
      component.instance['title'] = `x:${item.camMapX},y:${item.camMapY}`;
      component.instance['src'] = item.camState ? '../../../assets/images/map/map-active.png' : '../../../assets/images/map/map.png';
      this.allCameraImgNodes.push(component);
    });
  }
  areaChangeHandler(e){
    this.selectedFloor = null;
  }
  floorChangeHandler(e) {
    console.log(this.selectedMap);
    this.getCameraOnMap();
  }
  getMapList() {
    this.http.get(api.queryMapInfoList).subscribe((res) => {
      debugger;
      console.dir(res);
      const list = <any>res;
      // this.mapOptions = list.parseJSON(list);
      let x = (<DataTable>list);
      this.mapOptions = list;
      this.selectedMap = list[0];
      this.getCameraOnMap();
    },(error)=>{
      const list = [
        {
          "areaName": "平安大厦",
          "mapInfoData": [
            {
              "areaID": 1,
              "areaName": "平安大厦",
              "createTime": 1521993600000,
              "districtID": 1,
              "districtName": "一楼",
              "id": 1,
              "mapUrl": "http://192.168.7.48/imageserver/map1.jpg",
              "modifierTime": 1521993600000
            },
            {
              "areaID": 2,
              "areaName": "平安大厦",
              "createTime": 1521993600000,
              "districtID": 2,
              "districtName": "二楼",
              "id": 2,
              "mapUrl": "http://192.168.7.48/imageserver/map2.jpg",
              "modifierTime": 1521993600000
            }
          ]
        },
        {
          "areaName": "平安金融大厦",
          "mapInfoData": [
            {
              "areaID": 3,
              "areaName": "平安金融大厦",
              "createTime": 1521993600000,
              "districtID": 3,
              "districtName": "二楼",
              "id": 3,
              "mapUrl": "http://192.168.7.48/imageserver/map1.jpg",
              "modifierTime": 1521993600000
            },
            {
              "areaID": 4,
              "areaName": "平安金融大厦",
              "createTime": 1521993600000,
              "districtID": 4,
              "districtName": "一楼",
              "id": 4,
              "mapUrl": "http://192.168.7.48/imageserver/map3.jpg",
              "modifierTime": 1521993600000
            },
            {
              "areaID": 5,
              "areaName": "平安金融大厦",
              "createTime": 1522080000000,
              "districtID": 5,
              "districtName": "三楼",
              "id": 5,
              "mapUrl": "http://192.168.7.48/imageserver/map3.jpg",
              "modifierTime": 1522080000000
            }
          ]
        }
      ]
      this.mapOptions = list;
      this.selectedMap = list[0];
      //this.getCameraOnMap();
    });
  }
  getCameraOnMap() {
    this.http.get(api.getCameraOnMap + '?districtID=' + this.selectedMap.mapInfoData[0].districtID).subscribe((res) => {
      const list = <any>res;
      console.log(list);
      this.initCurrentMapOnlineCamera(list);
    }, (error) => {
    });
  }
}
export interface DataTable {

  areaName: string;

  mapInfoData: Array<MapInfo>;
}

export interface MapInfo {

  id:number;
  areaID:number;
  areaName:string;
  districtID:number;
  districtName:string;
  mapUrl:string;
  createTime:any;
  modifierTime:any;
}
