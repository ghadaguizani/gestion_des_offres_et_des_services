import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})

export class UpdatePasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute) { }
updateForm:FormGroup;
submitted = false;
verif:any;
// pour faciliter l'accées au control du formulaire à partir du modéle 
get f() { return this.updateForm.controls; }
update() {
    
  this.submitted = true;
  // stop here if form is invalid
  if (this.updateForm.invalid) {
      return;
  }
 
  
  else    
if (this.userService.updatePassword(this.f.ancienMdp.value,this.f.nouveauMdp.value,this.activatedRoute.snapshot.params['id']))
{
  console.log("ok");
}

  
  
}
onReset()
{
  this.submitted=false;
  this.updateForm.reset();
}
  ngOnInit(): void {
  this.updateForm = this.formBuilder.group({
    ancienMdp:['',[Validators.required,Validators.minLength(3)]],
    nouveauMdp:['',[Validators.required,Validators.minLength(3)]],
    confirmeMdp:['',[Validators.required]]
        },
        {
          validator: MustMatch('nouveauMdp', 'confirmeMdp')
        }
        );

  }
 

}
