import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  @ViewChild('mapImg') mapImg: ElementRef;

  /**表示当前选择的floor-map*/
  selectedMap = this.mapOptions[0];

  allCameraImgNodes: any = [];

  /**初始化当前地图上面的在线camera,在这里接受一个参数res,就是拿到接口返回的response）*/
  initCurrentMapOnlineCamera(res) {
    this.cameraPositions = [];
    res.map((item, index) => {
       const [x, y, z] = item.position.split(/,|，/g);
       this.cameraPositions.push({id: item.id, x, y, z, state: item.status});
    });
    this.cameraPositions.map((item, index) => {
      const img = document.createElement('img');
      img.style.position = 'absolute';
      if (item.state) {
        img.src = '../../../assets/images/map/map-active.png';
      } else {
        img.src = '../../../assets/images/map/map.png';
      }
      img.style.left = item.x + 'px';
      img.style.top = item.y + 'px';
      this.allCameraImgNodes.push(img);
      this.mapImg.nativeElement.appendChild(img);
    });
  }

  /**floor切换的回调,清除页面脏数据,更新当前map上所有camera位置*/
  floorChangeHandler(e) {
    console.log(this.selectedMap);
    this.allCameraImgNodes.map((item, index) => {
      this.mapImg.nativeElement.removeChild(item);
    });
    this.allCameraImgNodes = [];
  }

  constructor(private http: HttpClient) {
  }

  /**将查询到的camera的坐标信息赋值给mapDataSet*/
  showCameraOnMap() {
    this.http.get(api.showCameraOnMap).subscribe((res) => {
      console.dir(res);
      const list = <any>res;
      this.initCurrentMapOnlineCamera(list);
    });
  }

  ngOnInit() {
    this.showCameraOnMap();
  }

}
