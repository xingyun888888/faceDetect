import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SnapshotComponent }   from './snapshot.component';
import {SnapshotRoutingModule} from './snapshot-routing.module';
import {SearchModule} from "../../components/search/search.module";


@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    SnapshotRoutingModule,
    SearchModule
  ],
  declarations: [
    SnapshotComponent
  ],
  exports:[],
  providers:[]
})
export class SnapshotModule{ }
