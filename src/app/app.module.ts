import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * 引入图表库
 */
import { NgxEchartsModule } from 'ngx-echarts';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';
import { UserinfoModelComponent } from './components/model/userinfo-model/userinfo-model.component';
import {NavComponent} from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
// import { CameraComponent } from './pages/camera/camera.component';
import { CameraEditComponent } from './components/model/camera-edit/camera-edit.component';
// import { ServerComponent } from './pages/server/server.component';
import { ServerModelComponent } from './components/model/server-model/server-model.component';
// import { MobileComponent } from './pages/mobile/mobile.component';
// import {FacelibComponent} from './pages/facelib/facelib.component';
import {ReportDataAnalyzeComponent} from './pages/report-data-analyze/report-data-analyze.component';
import {FacelibModelComponent} from './components/model/facelib-model/facelib-model.component';
// import {LogComponent} from './pages/log/log.component';
// import {RecognizeComponent} from './pages/recognize/recognize.component';
// import { RegisterComponent } from './pages/register/register.component';
import { RegisterModelComponent } from './components/model/register-model/register-model.component';
// import {UserComponent} from './pages/user/user.component';
import { UserModelComponent } from './components/model/user-model/user-model.component';
import { RecognizeModelComponent } from './components/model/recognize-model/recognize-model.component';
// import { ParamComponent } from './pages/param/param.component';
import {ParamModelComponent} from './components/model/param-model/param-model.component';
import {DateFormatDirective} from './directive/date-format.directive';
// import {MapComponent} from './pages/map/map.component';
import { FormValidateDirective } from './directive/form-validate.directive';
import { MapMarkComponent } from './components/map-mark/map-mark.component';
// import { StrategyComponent } from './pages/strategy/strategy.component';
import { StrategyModelComponent } from './components/model/strategy-model/strategy-model.component';
// import { SnapshotComponent } from './pages/snapshot/snapshot.component';
// import { VedioComponent } from './pages/vedio/vedio.component';


@NgModule({
  entryComponents: [MapMarkComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    TableComponent,
    UserinfoModelComponent,
    SearchComponent,
    // CameraComponent,
    CameraEditComponent,
    // ServerComponent,
    ServerModelComponent,
    // MobileComponent,
    ReportDataAnalyzeComponent,
    // FacelibComponent,
    FacelibModelComponent,
    // LogComponent,
    // RecognizeComponent,
    RegisterModelComponent,
    // RegisterComponent,
    // UserComponent,
    UserModelComponent,
    RecognizeModelComponent,
    // ParamComponent,
    ParamModelComponent,
    DateFormatDirective,
    // MapComponent,
    FormValidateDirective,
    MapMarkComponent,
    // StrategyComponent,
    StrategyModelComponent,
    // SnapshotComponent,
    // VedioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
