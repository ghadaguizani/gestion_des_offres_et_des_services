import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceByUserComponent } from './service-by-user.component';

describe('ServiceByUserComponent', () => {
  let component: ServiceByUserComponent;
  let fixture: ComponentFixture<ServiceByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
