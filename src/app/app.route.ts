import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ReportDataAnalyzeComponent} from './pages/report-data-analyze/report-data-analyze.component';
import {RegisterComponent} from './pages/register/register.component';
import {RecognizeComponent} from './pages/recognize/recognize.component';
import {FacelibComponent} from './pages/facelib/facelib.component';
import {MobileComponent} from './pages/mobile/mobile.component';
import {ServerComponent} from './pages/server/server.component';
import {CameraComponent} from './pages/camera/camera.component';
import {UserComponent} from './pages/user/user.component';
import {LogComponent} from './pages/log/log.component';
import {ParamComponent} from './pages/param/param.component';
import {MapComponent} from './pages/map/map.component';

export const appRoutes: Routes = [
  {
    path:"map",
    component:MapComponent
  },
  {
    path: "param",
    component: ParamComponent
  },
  {
    path: "log",
    component: LogComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'reportAnalyze',
    component: ReportDataAnalyzeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recognize',
    component: RecognizeComponent,
  },
  {
    path: 'facelib',
    component: FacelibComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'server',
    component: ServerComponent,
  },
  {
    path: 'camera',
    component: CameraComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];




