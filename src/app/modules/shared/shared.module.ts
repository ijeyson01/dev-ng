import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AditionalAttribComponent } from './aditional-attrib/aditional-attrib.component';



@NgModule({
  declarations: [
    AditionalAttribComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AditionalAttribComponent
  ]
})
export class SharedModule { }
