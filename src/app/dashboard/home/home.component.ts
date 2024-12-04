import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  subscriptions: any[] = [{}];
  emptyState: any = {
    title: 'Dive into Wellness with Nektaro!',
    description: `It looks like you haven't subscribed to any plans yet. Discover our range of nutritional subscriptions designed to enhance your health.`,
    action: 'Browse Plans'
  }
  constructor(private readonly router: Router) { }
  ngOnInit() {
  }

  fetchOrders(): void {
    this.subscriptions = [{
      
    }]
  }

  emptyStateAction(event: any): void {
    console.log(event);
    this.router.navigate(['/dashboard/one']);
  }
}
