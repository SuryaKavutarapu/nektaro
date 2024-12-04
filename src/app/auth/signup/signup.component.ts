import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  statusmessage: any = {
    enable: false,
    data: {
      message: '',
      success: false
    }
  }
  signupForm = new FormGroup({
    mobile: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly router: Router, private readonly authService: AuthService) {
    
  }

  handleSignup() {
    if (this.signupForm.valid) {
      const data = this.signupForm.getRawValue();
      data.mobile = (data.mobile || '').toString()
      this.authService.signup(data).subscribe({
        next: (res: any) => {
          if (res.success) {
            this.statusmessage.enable = true;
            this.statusmessage.data.message = 'Registration successfull. Please wait will be redirecting to login';
            this.statusmessage.data.success = true;
            this.signupForm.reset();
            this.signupForm.markAsPristine();
            this.signupForm.markAsUntouched();
            setTimeout(() => {
              this.redirectToLogin();
            }, 2000);
          }
        }, error: (res) => {
          this.statusmessage.enable = true;
          this.statusmessage.data.message = !res.error.success ? res.error.error.message : 'Something went wrong';
        }
      })
    }

    // this.router.navigate(['/auth/verify'])
  }

  get signupFormControls() {
    return this.signupForm.controls;
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
