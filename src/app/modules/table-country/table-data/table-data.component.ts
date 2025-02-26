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
  
    countryIdToDelete: string = '';

  counstries: CountryI[] = [];


  statusData: string = 'success'; // init::cargando - success::información cargada - empty::sin datos

  frmBuilder = inject(FormBuilder);

  constructor( private readonly countryService: CountryService, private readonly changeDetector: ChangeDetectorRef ){}

  ngAfterViewInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.countryService.findAll().subscribe({
      next: (value) => {
        let countriesResponse: CountryI[] = value as CountryI[];
        this.counstries = [];
        if(countriesResponse.length > 0) {
          this.statusData = 'success';
          this.counstries.push(...countriesResponse);
        } else {
          this.statusData = 'empty';
        }
        this.changeDetector.detectChanges();
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
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
    let countryUpdate: CountryI = {
      name: this.nameUpdated,
      acronym: this.acronymUpdated,
      countryCode: this.countryCodeUpdated,
      continent: this.continentUpdated
    }
    this.countryService.updateCountry(countryUpdate, this.idUpdated).subscribe({
      next: (value) => {
        let valuerResponse : any = value;
        
        alert( `País actualizado correctamente: ${valuerResponse._id}`);
      },
      error : (error) => {

      },
      complete: () => {
        this.loadTable();
      }
    });
  }

  dataToDeleteCountry(countryId: string) {
    this.countryIdToDelete = countryId;
  }

  deleteCountry() {
    this.countryService.deleteCountry(this.countryIdToDelete).subscribe({
      next: (value) => {
        alert( `País eliminado correctamente: ${this.countryIdToDelete}`);
      },
      error: (error) => {
        alert( `Error al eliminar país: ${this.countryIdToDelete}`);
      },
      complete: () => {
        this.loadTable();
      }
    })
  }

}
