import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {RecognizeModelComponent }   from './recognize-model.component';
import { RecognizeModelRoutingModule} from './recognize-model-routing.module';


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RecognizeModelRoutingModule,
  ],
  declarations: [
    RecognizeModelComponent
  ],
  exports:[],
  providers:[]
})
export class RecognizeModelModule { }
