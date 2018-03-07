import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const appRoutes: Routes = [
  {
    path: 'snapshot',
    loadChildren: "app/pages/snapshot/snapshot.module#SnapshotModule"
  },
  {
    path: 'vedio',
    loadChildren: "app/pages/vedio/vedio.module#VedioModule"
  },
  {
    path: 'strategy',
    loadChildren: 'app/pages/strategy/strategy.module#StrategyModule'
  },
  {
    path: 'map',
    loadChildren: 'app/pages/map/map.module#MapModule'
  },
  {
    path: 'param',
    loadChildren: 'app/pages/param/param.module#ParamModule'
  },
  {
    path: 'log',
    loadChildren: 'app/pages/log/log.module#LogModule'
  },
  {
    path: 'user',
    loadChildren: 'app/pages/user/user.module#UserModule'
  },
  {
    path: 'reportAnalyze',
    loadChildren: 'app/pages/report-data-analyze/report-data-analyze.module#ReportDataAnalyzeModule',
  },
  {
    path: 'register',
    loadChildren:'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'recognize',
    loadChildren:'app/pages/recognize/recognize.module#RecognizeModule',
  },
  {
    path: 'facelib',
    loadChildren: 'app/pages/facelib/facelib.module#FacelibModule',
  },
  {
    path: 'mobile',
    loadChildren:'app/pages/mobile/mobile.module#MobileModule',
  },
  {
    path: 'server',
    loadChildren: 'app/pages/server/server.module#ServerModule',
  },
  {
    path: 'camera',
    loadChildren:'app/pages/camera/camera.module#CameraModule',
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];




