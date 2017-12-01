import {CanDeactivate} from "@angular/router";
import {DemoComponent} from "../demo/demo.component";
/**
 * Created by smileMAC on 11/27/17.
 */
export class UnsavedGuard implements CanDeactivate<DemoComponent>{
  canDeactivate(component:DemoComponent){
    return window.confirm("你还没有保存,请点击保存")
  }
}
