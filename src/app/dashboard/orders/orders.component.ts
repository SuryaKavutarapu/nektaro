import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Order {
  orderType: string;
  storeId: string;
  orderId: string;
  storeAddress: string;
  rewardsEarned: number;
  orderStatus: string;
  orderReceivedDate: string;
  orderDeliveredDate: string;
  receiptId: string;
  orderValue: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  title: string = `Orders & Rewards`;
  orders: Order[] = [];
  emptyState: any = {
    title: 'Ready for Refreshment?',
    description: `Looks like you haven't made any orders yet. Explore our menu and find the perfect drink to quench your thirst and boost your day.`,
    action: 'Browse Menu'
  }
  constructor(private readonly router: Router) {}
  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orders = [{
      orderType: 'In-Store',
      storeId: '12322',
      orderId: 'NKT_ORDER_001',
      storeAddress: 'Bhavanipuram, Vijayawada',
      rewardsEarned: 2,
      orderStatus: 'completed',
      orderReceivedDate: new Date().toDateString(),
      orderDeliveredDate: new Date().toDateString(),
      receiptId: 'NEKT_RECPT_001',
      orderValue: 200.00
    }, {
      orderType: 'In-Store',
      storeId: '12322',
      orderId: 'NKT_ORDER_001',
      storeAddress: 'Bhavanipuram, Vijayawada',
      rewardsEarned: 2,
      orderStatus: 'completed',
      orderReceivedDate: new Date().toDateString(),
      orderDeliveredDate: new Date().toDateString(),
      receiptId: 'NEKT_RECPT_001',
      orderValue: 200.00
    }]
  }

  emptyStateAction(event: any): void {

  }

  getReceipt(receiptId: string): void {
    this.router.navigate(['/dashboard/receipt', receiptId]);
  }
}
