import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../model/user';
import { alertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
   //user=new User();
valid:boolean;
role:string;
nom:string;
prenom:string;
mail:string;
mdp:string;
num:any;
dateNaissance:any;
id:any;
existe:number;
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];
erreur : number;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router, private tokenStorage:TokenStorageService) { }
  submitted:boolean=false;
  signInForm:any=FormGroup;
 get f() {return this.signInForm.controls;}
onSubmit()
{
  this.submitted = true;

  if(this.signInForm.invalid)
  {
    return;
  }
  else{
    this.authService.login(this.f.mail.value, this.f.password.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       // this.reloadPage();
       
       

       this.roles.forEach((role=>{
        if(role=="ROLE_ADMIN"){
          this.router.navigate(['/sidenav/dashboard']);
        }
        else 
       {
        this.router.navigate(['/']);
        }
       }))

      },

      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        Swal.fire('Bonjour','Nous n’avons pas trouvé de compte correspondant à ce que vous avez entré' , 'error');
        console.log(this.errorMessage);
      }
    );

  
}

}
reloadPage(): void {
  window.location.reload();
}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.signInForm=this.formBuilder.group(
      {
        mail:['', [Validators.required, Validators.email]],
        password:['',[Validators.required,Validators.minLength(3)]],


      }
    )

  }
}
