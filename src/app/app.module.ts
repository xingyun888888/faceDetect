import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import {HttpModule} from '@angular/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemoComponent } from './demo/demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import { HelloComponent } from './hello/hello.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {NavserviceService} from "./nav/navservice.service";
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HelloComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    TableComponent
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
  providers: [NavserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
