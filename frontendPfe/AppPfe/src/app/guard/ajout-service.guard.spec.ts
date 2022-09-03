import { TestBed } from '@angular/core/testing';

import { AjoutServiceGuard } from './ajout-service.guard';

describe('AjoutServiceGuard', () => {
  let guard: AjoutServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AjoutServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
