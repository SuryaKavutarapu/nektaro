import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  constructor(private readonly router: Router) {

  }

  handleForgot() {
    if (this.forgotForm.valid) {

    }
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
