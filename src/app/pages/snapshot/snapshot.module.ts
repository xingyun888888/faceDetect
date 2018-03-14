import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule ,ReactiveFormsModule}        from '@angular/forms';
import { SnapshotComponent }   from './snapshot.component';
import {SnapshotRoutingModule} from './snapshot-routing.module';
import  {CommonUiModule} from '../../components/common.module'

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiModule,
    SnapshotRoutingModule
  ],
  declarations: [SnapshotComponent],
  exports:[],
  providers:[]
})
export class SnapshotModule{ }
