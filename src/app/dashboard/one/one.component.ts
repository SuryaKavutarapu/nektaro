import { Component } from '@angular/core';
import { plans } from 'src/app/constants/subscriptioninfo';

@Component({
  selector: 'app-one',

  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {
  title: string = 'Nektaro One Plans'
  tabIndex: string = '1';
  planTabIndex: string = '1';
  showModel: boolean = false;
  data: any = [];
  tabs: any[] = [{
    name: 'Weight Loss',
    index: '1'
  }, {
    name: 'Weight Gain',
    index: '2'
  }, {
    name: 'Diabetic',
    index: '3'
  }]

  planTabs: any[] = [{
    name: 'Week',
    index: '1'
  }, {
    name: '2 Week',
    index: '2'
  }, {
    name: '4 Week',
    index: '3'
  }]

  subscriptionDetails: any = {};

  onTabChange(event: any) {
    this.tabIndex = event;
  }
  onPlanTabChange(event: any) {
    this.planTabIndex = event;
  }

  weightLossPlans: any = [];
  weightGainPlans: any = [];
  diabeticPlans: any = [];

  constructor() {
    this.data = plans;
    this.weightLossPlans = this.data.filter((each: any) => each.subscriptionType === 'WEIGHT_LOSS');
    this.weightGainPlans = this.data.filter((each: any) => each.subscriptionType === 'WEIGHT_GAIN');
    this.diabeticPlans = this.data.filter((each: any) => each.subscriptionType === 'WEIGHT_DIABETIC');
  }

  getPlanPrice(plan: any) {
    return plan.planInfo[0].price;
  }

  toggleModel(id: any) {
    this.subscriptionDetails =  this.data.find((each: any) => each.id = id);
    this.showModel = !this.showModel;
  }
}
