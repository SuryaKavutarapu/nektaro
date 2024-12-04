import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsPointsComponent } from './rewards-points.component';

describe('RewardsPointsComponent', () => {
  let component: RewardsPointsComponent;
  let fixture: ComponentFixture<RewardsPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardsPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
