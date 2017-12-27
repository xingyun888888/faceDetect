import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemoComponent } from './demo/demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './components/table/table.component';
import { CommonTableComponent } from './components/table/common-table/common-table.component';
import { UserinfoModelComponent } from './components/model/userinfo-model/userinfo-model.component';
import {NavComponent} from "./components/nav/nav.component";
import {HeaderComponent} from "./components/header/header.component";
import { SearchComponent } from './components/search/search.component';
import { CameraModelComponent } from './components/model/camera-model/camera-model.component';
import { CameraComponent } from './pages/camera/camera.component';
import {UserinfoComponent} from "./pages/userinfo/userinfo.component";
import { CameraEditComponent } from './components/model/camera-edit/camera-edit.component';

@NgModule({
  schemas:[
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
    CameraModelComponent,
    CameraComponent,
    CameraEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
