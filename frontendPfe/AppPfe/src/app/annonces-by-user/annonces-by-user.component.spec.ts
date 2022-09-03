import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesByUserComponent } from './annonces-by-user.component';

describe('AnnoncesByUserComponent', () => {
  let component: AnnoncesByUserComponent;
  let fixture: ComponentFixture<AnnoncesByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
