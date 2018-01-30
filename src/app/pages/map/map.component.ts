import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import api from '../../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {


  /**
   * 用来存储楼层的集合
   * @type {[{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string},{value: string; label: string}]}
   */
  mapOptions = [
    { value: 'floor1', label: '地下一层' },
    { value: 'floor2', label: '地下二层' },
    { value: 'floor3', label: '地下三层' },
    { value: 'floor4', label: '地下四层' },
    { value: 'floor5', label: '地下五层' }
  ];


  /**
   * 用来存储当前地图上面在线camera的集合
   * @type {[{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number},{name: string; x: number; y: number; state: number}]}
   */
  cameraPositions = [];


  /**
   * 绑定视图上面mapImg元素
   */
  @ViewChild('mapImg') mapImg: ElementRef;

  /**
   * 表示当前选择的floor-map
   * @type {{value: string; label: string}|{value: string; label: string}|{value: string; label: string}|{value: string; label: string}|{value: string; label: string}}
   */
  selectedMap = this.mapOptions[ 0 ];


  allCameraImgNodes:any = [];

  /**
   * 初始化当前地图上面的在线camera;
   */
  initCurrentMapOnlineCamera(){
    this.cameraPositions = [];
    for(let i=1;i<7;i++){
      this.cameraPositions.push({name:"camera",x:Math.random()*500,y:100+Math.random()*300,state:Math.random()>0.5?1:0})
    }
    this.cameraPositions.map((item,index)=>{
      var img = document.createElement("img");
      img.style.position = "absolute";
      if(item.state){
        img.src = "../../../assets/images/map/map-active.png";
      }else{
        img.src = "../../../assets/images/map/map.png";
      }
      img.style.left = item.x+"px";
      img.style.top = item.y+"px";
      this.allCameraImgNodes.push(img);
      this.mapImg.nativeElement.appendChild(img);
    })
  }


  /**
   * floor切换的回调  清除页面脏数据  更新当前map上所有camera位置
   * @param e
   */
  floorChangeHandler(e){
     console.log(this.selectedMap);
     this.allCameraImgNodes.map((item,index)=>{
       this.mapImg.nativeElement.removeChild(item);
     })
     this.allCameraImgNodes = [];
     this.initCurrentMapOnlineCamera();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initCurrentMapOnlineCamera();
  }

}
