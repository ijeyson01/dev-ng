import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { NewcountryComponent } from './newcountry/newcountry.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewcountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
