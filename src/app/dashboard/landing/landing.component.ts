import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private readonly router: Router, public readonly layoutService: LayoutService) {

  }

  redirectToOne() {
    this.router.navigate(['/dashboard/one']);
  }
}
