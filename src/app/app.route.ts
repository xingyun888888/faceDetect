/**
 * Created by smileMAC on 11/20/17.
 */
import {Routes,RouterModule} from '@angular/router';

import {DemoComponent} from './demo/demo.component'
import {HelloComponent} from "./hello/hello.component";
import {NavComponent} from "./nav/nav.component";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from './detail/detail.component';

export const appRoutes:Routes = [
  {
    path:"hello",
    component:HelloComponent
  },
  {
    path:"detail",
    component:DetailComponent
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
    path:'nav',
    component:NavComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
]
