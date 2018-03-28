import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  lastTime: Date = new Date();

  constructor(public router: Router) {
  }

  @Input()
  username = '';

  ngOnInit() {
    setInterval(() => {
      this.lastTime = new Date();
    }, 1000);
  }
}
