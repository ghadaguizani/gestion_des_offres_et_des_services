import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogPwdComponent } from './update-dialog-pwd.component';

describe('UpdateDialogPwdComponent', () => {
  let component: UpdateDialogPwdComponent;
  let fixture: ComponentFixture<UpdateDialogPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDialogPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
