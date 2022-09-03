import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledServicesComponent } from './disabled-services.component';

describe('DisabledServicesComponent', () => {
  let component: DisabledServicesComponent;
  let fixture: ComponentFixture<DisabledServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
