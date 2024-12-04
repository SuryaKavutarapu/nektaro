import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionMapperComponent } from './loaction-mapper.component';

describe('LoactionMapperComponent', () => {
  let component: LoactionMapperComponent;
  let fixture: ComponentFixture<LoactionMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoactionMapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoactionMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
