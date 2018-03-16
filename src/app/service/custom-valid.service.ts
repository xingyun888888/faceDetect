import { Injectable } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
@Injectable()
export class CustomValidService {

  constructor( private confirmServ: NzModalService) { }
  valid(validateForm,validOptions){
    // validOptions.map((item,index)=>{
    for(let j = 0;j<validOptions.length;j++){
      let validResult = validateForm.controls[validOptions[j].fieldName].errors;
      if(validResult){
        let v =validOptions[j].options;
        console.log(validResult)
        for(let i=0;i<v.length;i++){
          if(validResult[v[i].validCondition]){
            console.dir(validResult[v[i].validCondition]);
            this.confirmServ.error({
              zIndex:2000,
              title:v[i].info
            });
            return;
          }
        }
        return;
      }
    }
  }

}
