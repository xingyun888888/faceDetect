import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { RecognizeComponent }   from './recognize.component';
import { RecognizeRoutingModule} from './recognize-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RecognizeRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    RecognizeComponent
  ],
  exports:[],
  providers:[]
})
export class RecognizeModule { }
