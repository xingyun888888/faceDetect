/**
 * Created by smileMAC on 11/20/17.
 */
import {Routes,RouterModule} from '@angular/router';

import {DemoComponent} from './demo/demo.component'
import {HomeComponent} from "./home/home.component";
import {UserinfoComponent} from "./userinfo/userinfo.component";
import {CameraComponent} from "./pages/camera/camera.component";

export const appRoutes:Routes = [
  {
    path:'userinfo',
    component:UserinfoComponent,
  },
  {
    path:'camera',
    component:CameraComponent,
  },
  {
    path:"demo",
    component:DemoComponent,
    // canDeactivate:[UnsavedGuard],
    // children:[
    //   {path:"hello",component:HelloComponent}
    // ]
  },
  {
    path:'home',
    component:HomeComponent,
  }
]
