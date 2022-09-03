import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBricolageComponent } from './services-bricolage.component';

describe('ServicesBricolageComponent', () => {
  let component: ServicesBricolageComponent;
  let fixture: ComponentFixture<ServicesBricolageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBricolageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBricolageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
