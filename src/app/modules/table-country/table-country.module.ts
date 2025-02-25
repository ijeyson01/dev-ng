import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCountryRoutingModule } from './table-country-routing.module';
import { TableDataComponent } from './table-data/table-data.component';


@NgModule({
  declarations: [
    TableDataComponent
  ],
  imports: [
    CommonModule,
    TableCountryRoutingModule
  ]
})
export class TableCountryModule { }
