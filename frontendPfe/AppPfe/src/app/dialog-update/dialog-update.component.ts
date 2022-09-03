import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { alertService } from '../services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../model/user';
import { MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {
  id:any;
  nom:string;
  prenom:string;
  mail:string;
  num:any;
  mdp:any;
  ancienMpd:string;
  nouveauMdp:string;
  confirmMdp:string;
  erreur:number;

    constructor(private router :Router,private _snackBar: MatSnackBar,private userService:UserService, private activatedRoute:ActivatedRoute,private alert:alertService,private dialog:MatDialog,private dialogRef: MatDialogRef<DialogUpdateComponent>){}

  curUser=new User(); 
    ngOnInit(): void {
      this.id=localStorage.getItem('id');
      this.mdp=localStorage.getItem('mdp');

      console.log("l id est "+this.id);
      console.log(this.activatedRoute.snapshot.params['id']);
     this.userService.consulterUser(this.id).then(
        res => { // Success
          this.curUser = res;
          console.log("Le nom est  " + this.curUser.lastName)  ;
          console.log("Le prénom est  " + this.curUser.firstName)  ;
          console.log("L'adresse mail est  " + this.curUser.mail)  ;
          console.log("Le numéro de téléphone est  " + this.curUser.phoneNumber)  ;
  
  this.nom=this.curUser.lastName;
  this.prenom=this.curUser.firstName;
  this.mail=this.curUser.mail;
  this.num=this.curUser.phoneNumber;
  
        });
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
    onSubmit(f: NgForm)
    {
     
    
     this.userService.updateUser(this.curUser);
     this._snackBar.open("Enregistrement effectué");
     //this.router.navigate(['/profil']);
     this.router.navigate(['/profil',this.id])
     .then(() => {
       window.location.reload();
     });
    // window.location.reload();

     //this.alert.tinyAlertt();
  
    // document.write("l utilisateur est modifié");
    }
    fermer(){
      this.router.navigate(['/profil',this.id]);

      this.dialogRef.close();
     // this.dialogRef.close();
    }

}
