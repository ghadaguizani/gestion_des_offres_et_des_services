import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ServicesService } from '../services/services.service';
import { Servicee } from '../model/servicee';
import { Annonce } from '../model/annonce';
import { AnnonceService } from '../services/annonce.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServicesExistantsComponent } from '../services-existants/services-existants.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { UpdateServiceComponent } from '../update-service/update-service.component';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  firstName: string;
  lastName: string;
  profilPicture: string;
  mail: string;
  phoneNumber: string;
  id: number;
  services: Servicee[];
  annonces: Annonce[];
  test1: boolean;
  test2: boolean;
  constructor(private tokenStorageService: TokenStorageService, private service: ServicesService, private annonceService : AnnonceService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profilPicture = user.photoDeProfil;
      this.mail = user.mail;
      this.phoneNumber = user.phoneNumber;
    }
  }

 

  openDialog(): void {
    //const dialogRef = this.dialog.open(ServicesExistantsComponent,{ width: '1250px',});
  const a="bnj";
  const dialogRef = this.dialog.open(UpdateServiceComponent,{ width:'1250px'});
  //dialogRef.componentInstance.id =;
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

deleteService(id:any) {
  let conf=confirm("etes vous sur?")
  if(conf)
 {
  this.service.deleteService(id).subscribe(
    resp=>{
      console.log(resp);
      location.reload();
    },err=>{
      console.log("error");
      
    }
  );
 }
}




}
