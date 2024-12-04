import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Receipt {
  receiptId: string,
  orderType: string;
  storeId: string;
  orderId: string;
  storeAddress: string;
  rewardsEarned: number;
  orderStatus: string;
  orderReceivedDate: string;
  orderDeliveredDate: string;
  orderValue: number;
  orderDetails: OrderDetails
}

export interface OrderDetails {
  id: string,
  total: number,
  subtotal: number,
  tax: number,
  discount: number,
  serviceTax: number,
  items: Product[]
}

export interface Product {
  id: string,
  name: string,
  size: string,
  quantity: string,
  basePrice: number
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent implements OnInit {
  id: string | null = ``;
  constructor(private route: ActivatedRoute, private readonly router: Router) { }
  title: string = 'Receipt';
  receiptDetails: Receipt = {} as Receipt;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchReceiptData();
  }

  fetchReceiptData(): void {
    this.receiptDetails = {
      orderType: 'In-Store',
      storeId: '12322',
      orderId: 'NKT_ORDER_001',
      storeAddress: 'Bhavanipuram, Vijayawada',
      rewardsEarned: 2,
      orderStatus: 'completed',
      orderReceivedDate: new Date().toDateString(),
      orderDeliveredDate: new Date().toDateString(),
      receiptId: 'NEKT_RECPT_001',
      orderValue: 200.00,
      orderDetails: {
        id: 'NKT_ORDER_001',
        total: 200.00,
        subtotal: 180.00,
        tax: 20.00,
        discount: 0,
        serviceTax: 0,
        items: [{
          id: 'product_002',
          name: 'Smoothie',
          size: 'Regular',
          quantity: '250ml',
          basePrice: 89.99
        }, {
          id: 'product_002',
          name: 'Smoothie',
          size: 'Regular',
          quantity: '250ml',
          basePrice: 89.99
        },{
          id: 'product_002',
          name: 'Smoothie',
          size: 'Regular',
          quantity: '250ml',
          basePrice: 89.99
        },{
          id: 'product_002',
          name: 'Smoothie',
          size: 'Regular',
          quantity: '250ml',
          basePrice: 89.99
        },{
          id: 'product_002',
          name: 'Smoothie',
          size: 'Regular',
          quantity: '250ml',
          basePrice: 89.99
        }]
      }
    }
  }

  goBack(event: any): void {
    this.router.navigate(['/dashboard/orders']);
  }
}
