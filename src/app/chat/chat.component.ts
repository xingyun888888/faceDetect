import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  dataSource:Observable<any>;

  products:Array<any> = [];



  mobileValidator(control:FormControl):any{
    var myreg = /^(13[0-9]\d{8})/;
    let valid = myreg.test(control.value);
    console.log("mobile的校验结果是:"+valid);
    return valid ? null :{mobile:true};
  }

  formModel:FormGroup = new FormGroup({
      username:new FormControl(),
      mobile:new FormControl()
    })

  onSubmit(){
    console.log(this.formModel)
  }
  constructor(private http:Http) {
    //noinspection TypeScriptValidateTypes
    this.dataSource = this.http.get("/prodcuts").map((res)=>{
      return res.json();
    })

  }

  ngOnInit() {
  }

}
