/**
 * Created by smileMAC on 11/20/17.
 */
import {Routes,RouterModule} from '@angular/router';

import {DemoComponent} from './demo/demo.component'
import {HomeComponent} from "./home/home.component";
import {CameraComponent} from "./pages/camera/camera.component";
import {UserinfoComponent} from "./pages/userinfo/userinfo.component";
import {ServerComponent} from './pages/server/server.component';
import {MobileComponent} from './pages/mobile/mobile.component';

export const appRoutes:Routes = [
  {
    path:'mobile',
    component:MobileComponent,
  },
  {
    path:'server',
    component:ServerComponent,
  },
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


