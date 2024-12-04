import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CartComponent } from './cart/cart.component';
import { OneComponent } from './one/one.component';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { CartReviewComponent } from './cart/cart-review/cart-review.component';
import { PaymentDetailsComponent } from './payment/payment-details/payment-details.component';
import { SubscriptionComponent } from './one/subscription/subscription.component';
import { PaymentSuccessComponent } from './payment/payment-success/payment-success.component';
import { SubscriptionDetailsComponent } from './one/subscription-details/subscription-details.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardsPointsComponent } from './rewards/rewards-points/rewards-points.component';
import { RewardsCardComponent } from './rewards/rewards-card/rewards-card.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { OrdersComponent } from './orders/orders.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [DashboardComponent, CartComponent, CartReviewComponent, OneComponent, PaymentComponent, PaymentDetailsComponent, SubscriptionComponent, SubscriptionDetailsComponent, PaymentSuccessComponent, LandingComponent, AddressComponent, HomeComponent, RewardsComponent,
    RewardsPointsComponent, RewardsCardComponent, ReceiptComponent, OrdersComponent, WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
