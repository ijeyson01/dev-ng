import { Component } from '@angular/core';
import { CountryI } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styles: ``
})
export class TableDataComponent {

  counstries: CountryI[] = [];

  

}
