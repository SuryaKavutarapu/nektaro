import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'orders',
      component: OrdersComponent
    }, 
    {
      path: 'receipt/:id',
      component: ReceiptComponent
    },
    {
      path: 'one',
      component: OneComponent
    },
    {
      path: 'profile',
      loadChildren: () => import('../dashboard/profile/profile.module').then((m) => m.ProfileModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }