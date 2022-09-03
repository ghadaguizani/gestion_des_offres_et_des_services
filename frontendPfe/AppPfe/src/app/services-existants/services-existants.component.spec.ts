import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExistantsComponent } from './services-existants.component';

describe('ServicesExistantsComponent', () => {
  let component: ServicesExistantsComponent;
  let fixture: ComponentFixture<ServicesExistantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExistantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
