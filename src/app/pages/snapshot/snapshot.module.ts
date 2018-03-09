import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SnapshotComponent }   from './snapshot.component';
import {SnapshotRoutingModule} from './snapshot-routing.module';
import {SearchModule} from "../../components/search/search.module";
import {TableModule} from '../../components/table/table.module';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports:      [
    CommonModule,
    FormsModule,
    TableModule,
    SnapshotRoutingModule,
    SearchModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    SnapshotComponent
  ],
  exports:[],
  providers:[]
})
export class SnapshotModule{ }
