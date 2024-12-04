import { Component } from '@angular/core';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(public readonly layoutService: LayoutService) {}
}
