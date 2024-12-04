import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConstants } from '../../shared/constants/app.constants';
import { API_CONSTANTS, getAPIURL } from '../../constants/envconfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  static userAddress: [] = [];
  constructor(private readonly httpClient: HttpClient) {

  }

  saveAddress(payload: any): Observable<any> {
    return this.httpClient.post(getAPIURL(API_CONSTANTS.ADDADDRESS), payload);
  }

  getAddress(): Observable<any> {
    return this.httpClient.get(getAPIURL(API_CONSTANTS.GETADDRESS));
  }

  getAndSetUserAddress() {
    this.getAddress().subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}