import {Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";
import "rxjs";
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewChecked {
  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewChecked(): void {
  }
  name:string = "";
  sellerId:string = "";
  imgUrl:string = "http://placehold.it/400*220";
  size:number = 2;
  birthday:Date = new Date();
  pi:number = 3.1415926;
  titleFilter:FormControl = new FormControl();
  keyword:any = "";
  constructor(private routeInfo:ActivatedRoute) {


  }
  ngOnInit() {
    console.log("组件初始化完毕");
    this.sellerId = this.routeInfo.snapshot.params['id']
  }

  ngOnChanges(){
    console.log("子组件内容变更检测完毕");
    this.sellerId = this.sellerId ;
  }

  getValue(event:any){
    console.log(event.target.value);
    console.log(event.target.getAttribute("value"))
  }


}
