import { TestBed } from '@angular/core/testing';

import { AjoutAnnonceGuard } from './ajout-annonce.guard';

describe('AjoutAnnonceGuard', () => {
  let guard: AjoutAnnonceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AjoutAnnonceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
