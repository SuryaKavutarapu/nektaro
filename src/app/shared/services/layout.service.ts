import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  setMobileApp() {
    sessionStorage.setItem('mobile', 'true');
  }

  get isMobileApp() {
    return (sessionStorage.getItem('mobile') || '') === 'true'
  }
}
