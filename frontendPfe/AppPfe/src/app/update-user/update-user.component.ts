import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { alertService } from '../services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ImageComponent } from '../image/image.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
nom:string;
prenom:string;
mail:string;
num:number;
currentUser:User=new User();
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute,private alert:alertService,private dialog:MatDialog) { }
  curUser=new User(); 
  ngOnInit(): void {
     const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="60%";

  this.dialog.open(DialogUpdateComponent,dialogConfig);
  
}

}
