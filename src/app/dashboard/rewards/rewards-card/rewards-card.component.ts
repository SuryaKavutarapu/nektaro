import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards-card',
  templateUrl: './rewards-card.component.html',
  styleUrl: './rewards-card.component.scss'
})
export class RewardsCardComponent {
  rewardsData: any = {};
  pointsInfo: string[] = []
  rewardsCompleteState: any = {
    successMessage: `Cheers! You've Unlocked Free Drink`,
    description: `Enjoy your complimentary drink. Ready to start filling up again?`,
    actionText: `Use Reward`
  }
  constructor() {
    this.rewardsData = {
      rewardsPoints: 3,
      rewardsOffer: {
        title: 'Double the Goodness: BOGO Welcome Offer!',
        description: 'Welcome aboard! Buy a drink and get another on us—because one is never enough. Enjoy your bonus sip!',
        couponCode: 'NEKT - 123421272'
      }
    }
  }
}
