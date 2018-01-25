import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  options = [
    { value: 'floor1', label: '地下一层' },
    { value: 'floor2', label: '地下二层' },
    { value: 'floor3', label: '地下三层' },
    { value: 'floor4', label: '地下四层' },
    { value: 'floor5', label: '地下五层' }
  ];

  selectedOption = this.options[ 0 ];

  constructor() { }

  ngOnInit() {
  }

}
