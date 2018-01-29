import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  mapOptions = [
    { value: 'floor1', label: '地下一层' },
    { value: 'floor2', label: '地下二层' },
    { value: 'floor3', label: '地下三层' },
    { value: 'floor4', label: '地下四层' },
    { value: 'floor5', label: '地下五层' }
  ];

  cameraPositions = [
    {name:"camera1",x:630,y:200,state:1},
    {name:"camera1",x:530,y:210,state:0},
    {name:"camera1",x:320,y:350,state:1},
    {name:"camera1",x:600,y:230,state:0},
    {name:"camera1",x:430,y:200,state:1},
    {name:"camera1",x:250,y:100,state:0},
    {name:"camera1",x:700,y:50,state:0},
    {name:"camera1",x:500,y:100,state:1},
    {name:"camera1",x:500,y:300,state:0},
  ]

  @ViewChild('mapImg') mapImg: ElementRef;


  selectedMap = this.mapOptions[ 0 ];

  constructor() { }

  ngOnInit() {

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
      this.mapImg.nativeElement.appendChild(img);
    })
  }

}
