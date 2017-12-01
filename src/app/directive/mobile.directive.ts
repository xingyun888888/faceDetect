import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[mobile]',
  // providers:[{provide:NG_VALIDATORS,useValue:this.mobileValidator,muti:true}]
})
export class MobileDirective {

  constructor() { }

}
