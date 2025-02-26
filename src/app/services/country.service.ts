import { Injectable } from '@angular/core';
import { CountryI } from '../interfaces/country.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly uriCountry: string = environment.URI_COUNTRY;
  readonly urlBase: string = environment.URL_BASE;

  constructor(private readonly httpClient: HttpClient) { }

  findById(id: string) {
    
  }

  findAll() {
    return this.httpClient.get(`${this.urlBase}${this.uriCountry}`);
  }

  saveCountry(country: CountryI) { // create 
    return this.httpClient.post(`${this.urlBase}${this.uriCountry}`, country);
  }

  updateCountry( country: CountryI, idCountry: string ) {
    return this.httpClient.put(`${this.urlBase}${this.uriCountry}${idCountry}`, country );
  }

  deleteCountry( countryId: string ) {
    return this.httpClient.delete(`${this.urlBase}${this.uriCountry}${countryId}`);
  }
}
