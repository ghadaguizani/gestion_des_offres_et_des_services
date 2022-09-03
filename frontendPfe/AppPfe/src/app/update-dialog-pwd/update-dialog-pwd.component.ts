import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { alertService } from '../services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../model/user';
import { MatDialogConfig } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { isEmpty } from 'rxjs';
import { FormControl } from '@angular/forms';
//import { __values } from 'tslib';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

export function MustMatch(controlName: any, matchingControlName: any) {
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
  selector: 'app-update-dialog-pwd',
  templateUrl: './update-dialog-pwd.component.html',
  styleUrls: ['./update-dialog-pwd.component.css']
})

export class UpdateDialogPwdComponent implements OnInit {
ancienMdp:any;
mdp:any;
nouveauMdp:any;
confirmMdp:any;
erreur:number=0;
registerform:any = FormGroup;
submitted:boolean;
test:boolean;
idUser:any;
a:any;
user:User=new User();
userr=new User();
users:Array<User> = [];
b:any;

constructor(private formBuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute){}
//pour faciliter l'accées aux controles de formulaires à partir du modéle 
get f() { return this.registerform.controls; }
onSubmit(){
  this.submitted=true;
  
  if (this.registerform.invalid) {
    return;
}
else
  {
    console.log("l ancien mdp est"+this.f.mdp);

 // this.userService.updatePassword(this.f.mdp,this.f.mdpUser,this.activatedRoute.snapshot.params['id']);
  //document.write("le mot de passe est modifié avec succées");
//  console.log("nouveau mot de passe"+this.f.mdpUser);
}
 // console.log(" le nouveau mot de passe est"+this.f.nouveauMdp.value);
/*if(this.f.mdp.value!="" || this.f.nouveauMdp.value!="" || this.f.confirmMdp.value!="")
{
if(this.f.mdp.value!=this.anicienMdp)
{
  console.log("mot de passe incorrect");
  this.erreur=1;
}
}*/

 
}
  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
mdp:['',[Validators.required, Validators.minLength(3)]],
nouveauMdp:['',[Validators.required,Validators.minLength(3)]],
confirmMdp:['',[Validators.required]]
    },
    {
      Validator:MustMatch('nouveauMdp','confirmMdp')
    }
    );

   /* this.idUser=localStorage.getItem('id');
  this.users.push();
  this.userService.consulterUser(this.activatedRoute.snapshot.params['id']).then(
        res => { // Success
          this.user = res;
          console.log("l id est "+this.activatedRoute.snapshot.params['id']);
  console.log("le mot de passe est "+this.user.mdpUser);
   this.a=this.user.mdpUser;
  console.log("a est "+this.a);
  console.log("res"+res); 
  this.b==a;
  
  /*console.log("gggg"+this.user.mdpUser);
  this.a=this.user.mdpUser;
localStorage.setItem('mdp',this.user.mdpUser);
        }); */

       
   // this.a=localStorage.getItem('mdp');   
    //console.log("ghhhh"+ this.a);
  /*  this.registerform = this.formBuilder.group({
     
     ancienMdp:[localStorage.getItem('mdp')],
     // mdp:['',[Validators.required, Validators.minLength(3)]],
      mdp:['',[Validators.required,Validators.minLength(3)]],
      mdpUser:['',[Validators.required, Validators.minLength(3)]],
      confirmMdp:['',[Validators.required, Validators.minLength(3)]]
    },
    {
      validators: [
        MustMatch('mdpUser', 'confirmMdp'),
      //  MustMatch('ancienMdp', 'mdp')
     ]
       
    },
    

    );*/

  }

  

  onReset() {
    this.submitted = false;
    this.registerform.reset();
}
   
    /*if(this.mdp==null)
    {
      this.erreur=0;
    }
    else if(this.mdp!=null && this.anicienMdp!=this.mdp)
    {
this.erreur=1;
return;
    }*/
/* {
if (this.anicienMdp!=this.mdp)
{
  this.erreur=1;
  return;
  }
} */


}
  

  /*fermer(){
    this.router.navigate(['/profil']);

    this.dialogRef.close();
    // this.dialogRef.close();  
  }*/

