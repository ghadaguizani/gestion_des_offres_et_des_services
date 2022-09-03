import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledAnnoncesComponent } from './disabled-annonces.component';

describe('DisabledAnnoncesComponent', () => {
  let component: DisabledAnnoncesComponent;
  let fixture: ComponentFixture<DisabledAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
