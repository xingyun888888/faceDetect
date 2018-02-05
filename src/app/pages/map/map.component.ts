import {Component, OnInit, ElementRef, ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MapMarkComponent} from './../../components/map-mark/map-mark.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  /**用来存储楼层的集合*/
  mapOptions = [
    {value: 'floor1', label: '地下一层'},
    {value: 'floor2', label: '地下二层'},
    {value: 'floor3', label: '地下三层'},
    {value: 'floor4', label: '地下四层'},
    {value: 'floor5', label: '地下五层'}
  ];

  /**用来存储当前地图上面在线camera的集合*/
  cameraPositions = [];

  /**绑定视图上面mapImg元素*/
    // @ViewChild('mapImg') mapImg: ElementRef;
  @ViewChild('mapImg',{read: ViewContainerRef}) mapImg: ViewContainerRef;

  /**表示当前选择的floor-map*/
  selectedMap = this.mapOptions[0];


  /**
   * 用来存放当前地图上面生成的坐标组件的集合
   * @type {Array}
   */
  allCameraImgNodes: any = [];

  /**初始化当前地图上面的在线camera,在这里接受一个参数res,就是拿到接口返回的response）*/
  initCurrentMapOnlineCamera(res) {
    this.cameraPositions = [];
    res.map((item, index) => {
       const [x, y, z] = item.position.split(/,|，/g);
       this.cameraPositions.push({id: item.id, x, y, z, state: item.status});
    });
    this.cameraPositions.map((item, index) => {
      let mapMark = this.resolver.resolveComponentFactory(MapMarkComponent);
      let component = this.mapImg.createComponent(mapMark);
      component.instance['left']= item.x+"px";
      component.instance['top']= item.y+"px";
      component.instance['title']= `x:${item.x},y:${item.y}`;
      component.instance['src'] = item.state?'../../../assets/images/map/map-active.png':'../../../assets/images/map/map.png';
      this.allCameraImgNodes.push(component);
    });
  }

  /**floor切换的回调,清除页面脏数据,更新当前map上所有camera位置*/
  floorChangeHandler(e) {
    console.log(this.selectedMap);
    this.allCameraImgNodes.map((item, index) => {
      //this.mapImg.nativeElement.removeChild(item);
      item.destroy();
    });
    this.allCameraImgNodes = [];
  }

  constructor(private vcr: ViewContainerRef,private http: HttpClient,private resolver: ComponentFactoryResolver) {
  }

  /**将查询到的camera的坐标信息赋值给mapDataSet*/
  showCameraOnMap() {
    this.http.get(api.showCameraOnMap).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this.initCurrentMapOnlineCamera(list);
    },(error)=>{
      const list = [{
        id:1,
        position:"364,243",
        status:1
      },{
        id:1,
        position:"434,343",
        status:1
      },{
        id:1,
        position:"634,143",
        status:1
      }];
      this.initCurrentMapOnlineCamera(list);
    });
  }

  ngOnInit() {
    this.showCameraOnMap();
  }

}
