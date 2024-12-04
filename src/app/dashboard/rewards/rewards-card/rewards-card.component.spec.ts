import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsCardComponent } from './rewards-card.component';

describe('RewardsCardComponent', () => {
  let component: RewardsCardComponent;
  let fixture: ComponentFixture<RewardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
