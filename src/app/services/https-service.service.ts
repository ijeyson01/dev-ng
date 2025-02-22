import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsServiceService {

  urlBase = environment.URL_BASE;

  constructor(private readonly httpClient: HttpClient) { }

  getRequest(uri: string) {
    let url = `${this.urlBase}${uri}`;
    return this.httpClient.get(url);
  }

  postRequest(body: any, uri: string) {
    let url = `${this.urlBase}${uri}`;
    return this.httpClient.post(url, body);
  }
}
