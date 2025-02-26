import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCountryRoutingModule } from './table-country-routing.module';
import { TableDataComponent } from './table-data/table-data.component';
import { CountryModule } from '../country/country.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableDataComponent
  ],
  imports: [
    CommonModule,
    TableCountryRoutingModule,
    CountryModule,
    FormsModule
  ]
})
export class TableCountryModule { }
