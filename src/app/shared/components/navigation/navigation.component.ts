import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  constructor(public readonly authService: AuthService, private readonly router: Router) {

  }

  userData: any = {};

  ngOnInit(): void {
    if(this.authService.isAuthenticated) {
      this.userData = this.authService.getUserData;
    }
  }

  redirectToProfile() {
    this.router.navigate(['profile']);
  }

  get userInitial() {
    return this.userData.firstName.split('')[0];
  }
}
