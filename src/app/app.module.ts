import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemoComponent } from './demo/demo.component';

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
import { CommonTableComponent } from './components/table/common-table/common-table.component';
import { UserinfoModelComponent } from './components/model/userinfo-model/userinfo-model.component';
import {NavComponent} from './components/nav/nav.component';
import {HeaderComponent} from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CameraComponent } from './pages/camera/camera.component';
import {UserinfoComponent} from './pages/userinfo/userinfo.component';
import { CameraEditComponent } from './components/model/camera-edit/camera-edit.component';
import { ServerComponent } from './pages/server/server.component';
import { ServerModelComponent } from './components/model/server-model/server-model.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import {FacelibComponent} from './pages/facelib/facelib.component';
import {ReportDataAnalyzeComponent} from './pages/report-data-analyze/report-data-analyze.component';
import {FacelibModelComponent} from './components/model/facelib-model/facelib-model.component';
import {LogComponent} from './pages/log/log.component';
import {RecognizeComponent} from './pages/recognize/recognize.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterModelComponent } from './components/model/register-model/register-model.component';
import {UserComponent} from './pages/user/user.component';
import { UserModelComponent } from './components/model/user-model/user-model.component';
import { RecognizeModelComponent } from './components/model/recognize-model/recognize-model.component';
import { ParamComponent } from './pages/param/param.component';
import { ParamModelComponent } from './components/model/param-model/param-model.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    TableComponent,
    CommonTableComponent,
    UserinfoComponent,
    UserinfoModelComponent,
    SearchComponent,
    CameraComponent,
    CameraEditComponent,
    ServerComponent,
    ServerModelComponent,
    MobileComponent,
    ReportDataAnalyzeComponent,
    FacelibComponent,
    FacelibModelComponent,
    LogComponent,
    RecognizeComponent,
    RegisterModelComponent,
    RegisterComponent,
    UserComponent,
    UserModelComponent,
    RecognizeModelComponent,
    ParamComponent,
    ParamModelComponent
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
