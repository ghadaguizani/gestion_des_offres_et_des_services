import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
//import { InscriptionService } from '../service/inscription.service';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';


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
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {

  user = new User();
  a: Boolean;
  erreur: number;
  //Form Validables 
  registerForm: FormGroup;
  submitted = false;
  role: string;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  num: any;
  dateNaissance: any;
  id: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  fileName: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private alert: alertService, private router: Router) { }

  //Add user form actions
  // pour faciliter l'accées au control du formulaire à partir du modéle 
  get f() { return this.registerForm.controls; }

  selectFile(event): void {
    if (event.target.files.length > 0) {
      this.authService.upload(event.target.files[0]).subscribe(
        data => {
          this.fileName = data.message;
          console.log(data);
        },
        err => {


        }
      );
    }
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    else {
      //const { firstName, lastName, mail, phoneNumber, password } = this.registerForm;
      this.authService.register(this.f.firstName.value, this.f.lastName.value, this.f.mail.value, this.f.phoneNumber.value, this.f.password.value, this.fileName).subscribe(
        data => {
          console.log(data);
          console.log("oui");
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          Swal.fire(' Votre inscription est réussie ! ', 'vérifiez votre courrier pour activer votre compte s il vous plaît', 'success');

        },
        err => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);
          this.isSignUpFailed = true;
          Swal.fire('Bonjour', 'L email que vous avez saisi existe déjà', 'error');

        }
      );

    }



  }
  //login form
  ngOnInit(): void {
    //login form
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]


    },
      {
        validator: MustMatch('password', 'confirmPassword')

      }
    );
  }

}
