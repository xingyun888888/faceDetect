import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-map-mark',
  templateUrl: './map-mark.component.html',
  styleUrls: ['./map-mark.component.css']
})
export class MapMarkComponent implements OnInit {

  @Input() left: string = '';
  @Input() top: string = '';
  @Input() title: string = '';
  @Input() src: string = '';


  constructor() {
  }

  ngOnInit() {
  }

}
