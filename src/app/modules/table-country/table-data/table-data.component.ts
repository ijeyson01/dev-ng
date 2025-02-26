import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CountryI } from '../../../interfaces/country.interface';
import { CountryService } from '../../../services/country.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styles: ``
})
export class TableDataComponent implements AfterViewInit {

    idUpdated: string = '';
    nameUpdated: string = '';
    acronymUpdated: string = '';
    countryCodeUpdated: string = '';
    continentUpdated: string = '';

  counstries: CountryI[] = [
    {
       name: 'Ecuador',
       acronym: 'EC',
       continent: 'América',
       countryCode: '593'
    }
  ];

  countryUpdate: CountryI = {
    _id: '',
    name: '',
    acronym: '',
    continent: '',
    countryCode: ''
  };

  statusData: string = 'success'; // init::cargando - success::información cargada - empty::sin datos

  frmBuilder = inject(FormBuilder);

  constructor( private readonly countryService: CountryService, private readonly changeDetector: ChangeDetectorRef ){}

  ngAfterViewInit(): void {
    
    // this.countryService.findAll().subscribe({
    //   next: (value) => {
    //     let countriesResponse: CountryI[] = value as CountryI[];
    //     if(countriesResponse.length > 0) {
    //       this.statusData = 'success';
    //       this.counstries.push(...countriesResponse);
    //     } else {
    //       this.statusData = 'empty';
    //     }
    //     this.changeDetector.detectChanges();
    //   },
    //   error: (error) => {

    //   },
    //   complete: () => {

    //   }
    // });
  }

    formInit(): FormGroup {
      return this.frmBuilder.group({
        name: ['', [Validators.required]],
        acronym: ['', [Validators.required, Validators.maxLength(5)]],
        countryCode: ['', [Validators.required, Validators.maxLength(5)]],
        continent: ['', [Validators.required]]
      });
    }

  selectCountryUpdate(country: CountryI) {
    this.idUpdated = country._id!;
    this.nameUpdated = country.name;
    this.acronymUpdated = country.acronym;
    this.countryCodeUpdated = country.countryCode;
    this.continentUpdated = country.continent;
  }

  updateCountry() {

  }

}
