/**
 * Created by smileMAC on 11/20/17.
 */
import {Routes,RouterModule} from '@angular/router';

import {DemoComponent} from './demo/demo.component'
import {HelloComponent} from "./hello/hello.component";
import {ChatComponent} from "./chat/chat.component";
import {UnsavedGuard} from "./guard/UnsavedGuard";

export const appRoutes:Routes = [
  {
    path:"",
    component:HelloComponent
  },
  {
    path:"chat",
    component:ChatComponent,
    outlet:"aux"
  },
  {
    path:"hello",
    component:HelloComponent
  },
  {
    path:"demo",
    component:DemoComponent,
    canDeactivate:[UnsavedGuard],
    children:[
      {path:"hello",component:HelloComponent}
    ]
  }
]
