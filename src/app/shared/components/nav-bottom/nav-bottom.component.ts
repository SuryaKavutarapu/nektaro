import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrl: './nav-bottom.component.scss'
})
export class NavBottomComponent {
  menuItems: any[] = [{
    id: 1,
    name: 'Home',
    icon: 'local_fire_department',
    routerPath: '/dashboard/home',
    isActive: true
  },
  // {
  //   id: 2,
  //   name: 'Shop',
  //   icon: 'widgets',
  //   routerPath: '/main/mobile/menu',
  //   isActive: false
  // }, 
  {
    id: 3,
    name: 'One',
    icon: 'counter_1',
    routerPath: '/dashboard/one',
    isActive: false
  },
  {
    id: 4,
    name: 'Orders',
    icon: 'receipt_long',
    routerPath: '/dashboard/orders',
    isActive: false
  }, {
    id: 5,
    name: 'Profile',
    icon: 'account_circle',
    routerPath: '/dashboard/profile',
    isActive: false
  }]

  constructor(private readonly router: Router) {
    const routerIndex = parseFloat(sessionStorage.getItem('ROUTER_INDEX') || '1');
    this.setMenuActiveAndRedirect(this.menuItems.find(x => x.id === routerIndex));
  }

  setMenuActiveAndRedirect(menuItem: any) {
    this.router.navigate([menuItem.routerPath]).then(() => {
      sessionStorage.setItem('ROUTER_INDEX', `${menuItem.id}`);
      this.menuItems = this.menuItems.map(e => {
        e.isActive = e.id === menuItem.id;
        return e;
      })
    }).catch(e => {
      console.log(e);
    })
  }
}
