import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { appConstants } from '../../shared/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private readonly authService: AuthService, private readonly router: Router) { }
  isLoggedIn: boolean = false;
  statusmessage: any = {
    enable: false,
    data: {
      message: '',
      success: false
    }
  }

  ngOnInit() {
    const token = this.authService.isAuthenticated;
    if (token) {
      this.redirectToDashboard();
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = this.loginForm.getRawValue();
    this.authService.login(loginPayload).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log(res);
          sessionStorage.setItem(appConstants.AUTH_TOKEN_KEY, res.data.token);
          sessionStorage.setItem(appConstants.USER_DATA, JSON.stringify(res.data));
          this.statusmessage.enable = true;
          this.statusmessage.data.message = 'Logged In successfully. Please wait will be redirecting to dashboard';
          this.statusmessage.data.success = true;
          this.loginForm.reset();
          this.loginForm.markAsPristine();
          this.loginForm.markAsUntouched();

          switch (res.data.role) {
            case 'DRIVER':
              this.redirectToPartners();
              break;
            case 'ADMIN':
              this.redirectToAdmin();
              break;
            case 'STORE_MANAGER ':
              this.redirectToPOS();
              break;
            default:
              this.redirectToDashboard();
              break;
          }
        }
      }, error: (res) => {
        this.statusmessage.enable = true;
        this.statusmessage.data.message = !res.error.success ? res.error.error.message : 'Something went wrong';
      }
    })
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  redirectToForgotPassword() {
    this.router.navigate(['/auth/forgot'])
  }

  redirectToPOS() {
    this.router.navigate(['/pos'])
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  redirectToSignUp() {
    this.router.navigate(['/auth/signup']);
  }

  redirectToPartners() {
    this.router.navigate(['/partners']);
  }

  redirectToAdmin() {
    this.router.navigate(['/admin']);
  }
}
