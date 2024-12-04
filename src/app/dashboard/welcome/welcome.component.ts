import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface WalkThroughContent {
  title: string;
  image: string;
  description: string;
  primaryAction: string;
  enableBackStep: boolean
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  @Output() handleEvent: EventEmitter<boolean> =  new EventEmitter(false);
  index: number = 0;
  content: WalkThroughContent = {
    title: '',
    image: '',
    description: '',
    primaryAction: '',
    enableBackStep: true
  };

  walkthroughSteps: Array<WalkThroughContent> = [{
    title: 'Welcome',
    image: './assets/images/1.svg',
    description: 'Experience the fresh taste of nature. Dive into our world of healthy, natural juices, smoothies, and more!',
    primaryAction: 'Start',
    enableBackStep: false
  }, {
    title: 'Earn Rewards',
    image: './assets/images/2.svg',
    description: 'Join our loyalty program to collect points with every purchase and unlock exclusive benefits.',
    primaryAction: 'Next',
    enableBackStep: true
  }, {
    title: 'Healthy Living',
    image: './assets/images/3.svg',
    description: 'Gain insights on living a healthier lifestyle with tips, recipes, and more from our wellness experts',
    primaryAction: 'Next',
    enableBackStep: true
  }, {
    title: 'Stay Hydrated',
    image: './assets/images/4.svg',
    description: 'Never miss out on the latest. Get updates on new arrivals, special offers through the app',
    primaryAction: 'Get Started',
    enableBackStep: true
  }];
  constructor(private readonly router: Router) {
    this.changeContent();
  }

  nextStep(): void {
    this.index += 1;
    this.index === this.walkthroughSteps.length ? this.redirectToNextPage() : this.changeContent();
  }

  previousStep(): void {
    this.index = this.index !== 0 ? this.index - 1 : this.index;
    this.changeContent()
  }

  changeContent(): void {
    this.content = this.walkthroughSteps[this.index];
  }

  redirectToNextPage() {
    this.handleEvent.emit(true);
  }
}
