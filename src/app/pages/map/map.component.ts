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
  /**
   * 是否展示上传地图模态框
   * @type {boolean}
   */
  isShowUploadModal: boolean = false;
  @Input()
  isShowUpDownModal = true;
  fileName: string="";
/**
   * 地图上传模态框点击确定的回调
   * @param e
   */
  handleMapUploadOk = (e) => {
    this.isShowUploadModal = false;
  }
 /**
   * 地图上传模态框点击取消的回调
   * @param e
   */
  handleMapUploadCancel = (e) => {
    console.log(e);
    this.isShowUploadModal = false;
  }
 /**用来存储楼层的集合*/
  mapOptions = [];
 /**
   * 保存准备上传到服务的地图文件
   * @type {Array}
   */
  mapFileList: Array<any> = [];
  /**
   * 保存地图的名字
   * @type {string}
   */
  mapName: string = '';
  districtID: any = '';
  areaName:string='';
  districtName:string ='';
  formModel: FormGroup;
 /**
   * 返回false就是取消上传
   * @param file
   * @returns {boolean}
   */
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

  /**
   * 取消上传地图的操作
   * @param e
   */
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
  /**表示当前区域楼层   当seletedMap选择以后 就会动态修改**/
  selectedFloor = this.selectedMap&&this.selectedMap.mapInfoData[0];
  selectedMapFloor: Array<any> = [];
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

  /**
   * 当选择区域改变时 会调用这个函数  --并清空楼层选择选项
   * @param e
   */
  areaChangeHandler(e) {
    debugger;
    // this.selectedMapFloor = null;
    this.selectedMap = e;
    this.selectedMapFloor = this.selectedMap.mapInfoData;
  }
  /**floor切换的时调用 -- 清除页面脏数据,更新当前map上所有camera位置*/
  floorChangeHandler(e) {

    /**
     * 当我切换地图时，然后发出一个请求  带着这个map的id作为参数,然后去后台查询camera表里面满足条件的摄像头;
     *  返回回来
     */
    debugger;
    console.log(this.selectedMap);
    this.allCameraImgNodes.map((item, index) => {
      item.destroy();
    });
    this.allCameraImgNodes = [];
    this.selectedFloor = e;
    this.getCameraOnMap();
  }

 /**
   * 在这里获取所有地图
   * @param {ViewContainerRef} vcr
   * @param {HttpClient} http
   * @param {ComponentFactoryResolver} resolver
   */
  getMapList() {
    this.http.get(api.queryMapInfoList).subscribe((res) => {
      debugger;
      console.dir(res);
      const list = <any>res;
      // this.mapOptions = list.parseJSON(list);
      let dataInfo = (<DataTable>list);
      this.mapOptions = list;
      // this.selectedMap = list[0];
      // this.mapOptions = dataInfo[0];
      this.selectedMap = list[0];
      this.getCameraOnMap();
    });
  }
  getCameraOnMap() {
    this.http.get(api.getCameraOnMap + '?districtID=' + this.selectedFloor.districtID).subscribe((res) => {
      debugger;
      const list = <any>res;
      console.log(list);
      this.initCurrentMapOnlineCamera(list);
    }, (error) => {
    });
  }
}
export class DataTable {

  public areaName: string;

  public mapInfoData: Array<MapInfo>;
}

export class MapInfo {

  id:number;
  areaID:number;
  areaName:string;
  districtID:number;
  districtName:string;
  mapUrl:string;
  createTime:any;
  modifierTime:any;
}
