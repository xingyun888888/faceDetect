import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {RecognizeModelComponent }   from './recognize-model.component';
import { RecognizeModelRoutingModule} from './recognize-model-routing.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RecognizeModelRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    RecognizeModelComponent
  ],
  exports:[],
  providers:[]
})
export class RecognizeModelModule { }
