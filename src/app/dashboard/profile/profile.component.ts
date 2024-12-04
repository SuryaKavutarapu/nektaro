import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appConstants } from 'src/app/shared/constants/app.constants';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  title: string = 'My Account';
  data: any;
  constructor(private readonly router: Router, private readonly layoutService: LayoutService) {
    this.data = JSON.parse(sessionStorage.getItem(appConstants.USER_DATA) || '');
  }

  get initials() {
    return this.data.firstName.split('')[0];
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/auth/login']).then(res => {
      this.layoutService.setMobileApp();
    })
  }
}
