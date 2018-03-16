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
import {StrategyComponent} from './pages/strategy/strategy.component';
import {SnapshotComponent} from './pages/snapshot/snapshot.component';
import {VedioComponent} from './pages/vedio/vedio.component';
import {DatamonitorComponent} from './pages/datamonitor/datamonitor.component';
import {MapmonitorComponent} from './pages/datamonitor/mapmonitor/mapmonitor.component';
import {ServermonitorComponent} from './pages/datamonitor/servermonitor/servermonitor.component';
import {MobilemonitorComponent} from './pages/datamonitor/mobilemonitor/mobilemonitor.component';
import {ClientmonitorComponent} from './pages/datamonitor/clientmonitor/clientmonitor.component';
import {NetmonitorComponent} from './pages/datamonitor/netmonitor/netmonitor.component';
import {AnalyzerComponent} from './pages/analyzer/analyzer.component';

export const appRoutes: Routes = [
  {
    path: 'snapshot',
    component: SnapshotComponent
  },
  {
    path: 'vedio',
    component: VedioComponent
  },
  {
    path: 'strategy',
    component: StrategyComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'param',
    component: ParamComponent
  },
  {
    path: 'log',
    component: LogComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'analyzer',
    component: AnalyzerComponent
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
  },
  {
    path: 'datamonitor',
    component: DatamonitorComponent, children: [
      {path: '', component: MapmonitorComponent},
      {path: 'camerainfo', component: MapmonitorComponent},
      {path: 'servermonitor', component: ServermonitorComponent},
      {path: 'mobilemonitor', component: MobilemonitorComponent},
      {path: 'clientmonitor', component: ClientmonitorComponent},
      {path: 'netmonitor', component: NetmonitorComponent}
    ]
  }
];




