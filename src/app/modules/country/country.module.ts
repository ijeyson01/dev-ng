import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { NewcountryComponent } from './newcountry/newcountry.component';


@NgModule({
  declarations: [
    NewcountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
