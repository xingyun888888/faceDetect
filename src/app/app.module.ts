import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DemoComponent } from './demo/demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import { HelloComponent } from './hello/hello.component';
import { ChatComponent } from './chat/chat.component';
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/UnsavedGuard";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {LoggerService} from "ng-zorro-antd/src/util/logger";
import { MultiplePipe } from './pipe/multiple.pipe';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebSocketService} from "./shared/web-socket.service";
import { GaochaoComponent } from './gaochao/gaochao.component';
import { Gaochao1Component } from './gaochao1/gaochao1.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HelloComponent,
    ChatComponent,
    ProductDetailComponent,
    MultiplePipe,
    WebSocketComponent,
    GaochaoComponent,
    Gaochao1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LoginGuard,UnsavedGuard,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
