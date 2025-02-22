import { Injectable } from '@angular/core';
import { HttpsServiceService } from './https-service.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private readonly httpService: HttpsServiceService) { }

  findById(id: string) {

  }

  findAll() {

  }

  saveCountry(country: any) {
    
  }
}
