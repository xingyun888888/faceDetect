import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
    
  _titles:Array<any> = [
	  {
	  	key:"id",
	  	name:"id"
	  },
	  {
	  	key:"sex",
	  	name:"性别"
	  },
	  {
	  	key:"username",
	  	name:"姓名"
	  },
	  {
	  	key:"address",
	  	name:"地址"
	  },
	  {
	  	key:"birthday",
	  	name:"生日"
	  },

  ]

  _dataSet = [];


  constructor(public http:HttpClient) { }

  ngOnInit() {
     this.http.get("/api/bioauth/test").subscribe((res)=>{
         console.dir(res);
         let list = <any>res;
         console.dir(res);
         this._dataSet = list;
     })
    
  }

}
