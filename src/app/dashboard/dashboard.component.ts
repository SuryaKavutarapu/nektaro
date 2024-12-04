import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';
import { AuthService } from '../auth/auth.service';
import { AddressService } from './address/address.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userData: any = {};
  hasAddress: boolean = false;
  onboarding: boolean = false;
  loading: boolean = true;
  enableAddress: boolean = false;
  constructor(public readonly layoutService: LayoutService, private readonly authService: AuthService, private readonly addressService: AddressService) {
    if (this.authService.isAuthenticated) {
      this.userData = this.authService.getUserData;
    }
  }

  ngOnInit(): void {
    this.loading = false;
    this.hasAddress = false;
    const HAS_ADDRESS = sessionStorage.getItem('has_address');
    if (HAS_ADDRESS === 'true') {
      this.hasAddress = true;
      this.loading = false;
    } else {
      this.addressService.getAddress().subscribe({
        next: (res) => {
          if (res.success) {
            this.hasAddress = res.data.length > 0
            sessionStorage.setItem('has_address', 'true');
            sessionStorage.setItem('user_address', JSON.stringify(res.data[0]));
          } else {
            this.onboarding = true;
            this.hasAddress = false;
          }
          this.loading = false;
        }, error: (error: any) => {
          this.loading = false;
        }
      });
    }
  }

  enableLocation(value: any) {
    this.onboarding = false;
    this.enableAddress = value;
  }
}
