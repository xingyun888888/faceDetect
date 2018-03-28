import {Component, OnInit, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input} from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MapMarkComponent} from '../../components/map-mark/map-mark.component';
import {NzModalService} from 'ng-zorro-antd';



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

  /**
   * 地图上传模态框点击确定的回调
   * @param e
   */
  handleMapUploadOk = (e) => {
    this.isShowUploadModal = false;
  };
  /**
   * 地图上传模态框点击取消的回调
   * @param e
   */
  handleMapUploadCancel = (e) => {
    console.log(e);
    this.isShowUploadModal = false;
  };


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
  /**
   * 返回false就是取消上传
   * @param file
   * @returns {boolean}
   */
  beforeUpload(file) {
    this.mapFileList.push(file);
    console.log(file);
    return false;
  }

  /**
   * @param e 确认上传地图的操作
   */
  handleMapUpload(e) {
    const formData = new FormData();
    this.mapFileList.forEach((file: any) => {
      formData.append('map', file);
    });
    formData.append('mapName', this.mapName);
    this.http.post(api.addMap, formData, {
      headers: new HttpHeaders({})
    }).subscribe((event: any) => {
      this.mapFileList = [];
      this.isShowUploadModal = false;
      //上传成功之后再次请求服务器获取最新的地图列表
      this.getMapList();
      this.confirmServ.success({
        content: '上传成功'
      });
    }, (err) => {
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


  /**
   * 用来存放当前地图上面生成的坐标组件的集合
   * @type {Array}
   */
  allCameraImgNodes: any = [];

  /**初始化当前地图上面的在线camera,在这里接受一个参数res,就是拿到接口返回的response）*/
  initCurrentMapOnlineCamera(res) {
    this.cameraPositions = res;
    res.map((item, index) => {
      let mapMark = this.resolver.resolveComponentFactory(MapMarkComponent);
      let component = this.mapImg.createComponent(mapMark);

      component.instance['left'] = item.camMapX-16 + 'px';
      component.instance['top'] = item.camMapY-32 + 'px';
      component.instance['title'] = `x:${item.camMapX},y:${item.camMapY}`;
      component.instance['src'] = item.camState ? '../../../assets/images/map/map-active.png' : '../../../assets/images/map/map.png';
      this.allCameraImgNodes.push(component);
    });
  }

  /**floor切换的回调,清除页面脏数据,更新当前map上所有camera位置*/
  floorChangeHandler(e) {

    /**
     * 当我切换地图时，然后发出一个请求  带着这个map的id作为参数,然后去后台查询camera表里面满足条件的摄像头;
     *  返回回来
     */
    console.log(this.selectedMap);
    this.allCameraImgNodes.map((item, index) => {
      item.destroy();
    });
    this.allCameraImgNodes = [];
    this.getCameraOnMap();
  }

  /**
   * 在这里获取所有地图
   * @param {ViewContainerRef} vcr
   * @param {HttpClient} http
   * @param {ComponentFactoryResolver} resolver
   */
  getMapList() {
    this.http.get(api.queryMapList + '?type=map').subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this.mapOptions = list;
      this.selectedMap = list[0];
      this.getCameraOnMap();
    });
  }


  constructor(private vcr: ViewContainerRef, private http: HttpClient, private resolver: ComponentFactoryResolver, private confirmServ: NzModalService) {
    /**
     *  因为beforeUpload 里面用到了this  但是this取值是根据方法执行的时候才知道的
     *  所以要想this是该组件 就必须在这里进行绑定为当前组件的this;
     * @type {any}
     */

    this.beforeUpload = this.beforeUpload.bind(this);

  }



  /**将查询到的camera的坐标信息赋值给mapDataSet
   *this.selectedMap 就是当前选择地图 信息包含 地图的id,name,value(图片路径)
   *
   * */
  getCameraOnMap() {
    this.http.get(api.getCameraOnMap + '?districtID=' + this.selectedMap.id).subscribe((res) => {
      const list = <any>res;
      console.log(list);
      this.initCurrentMapOnlineCamera(list);

    }, (error) => {
      const list = [{
        id: 1,
        camMapX: 364,
        camMapY: 243,
        camState: 1
      }, {
        id: 1,
        camMapX: 464,
        camMapY: 233,
        camState: 0
      }, {
        id: 1,
        camMapX: 564,
        camMapY: 442,
        camState: 1
      }];
      this.initCurrentMapOnlineCamera(list);
    });
  }

  ngOnInit() {
    this.getMapList();
  }

}
