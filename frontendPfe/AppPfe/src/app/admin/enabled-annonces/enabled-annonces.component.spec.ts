import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnabledAnnoncesComponent } from './enabled-annonces.component';

describe('EnabledAnnoncesComponent', () => {
  let component: EnabledAnnoncesComponent;
  let fixture: ComponentFixture<EnabledAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnabledAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnabledAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
