import { Component, OnInit } from '@angular/core';
import { Annonce } from '../model/annonce';
import { AnnonceService } from '../services/annonce.service';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.component.html',
  styleUrls: ['./ajout-annonce.component.css']
})
export class AjoutAnnonceComponent implements OnInit {
  newAnnonce = new Annonce();
  verif1 = false;
  verif2:boolean = false;
  verif3: boolean = false;
  user = this.tokenStorageService.getUser();
  firstName = this.user.firstName;
  lastName: string = this.user.lastName;
  mail: string = this.user.mail;
  phoneNumber: string = this.user.phoneNumber;
  id: number = this.user.id;
  currentDate = new Date();
  private roles: string[] = [];
  isLoggedIn = false;
  constructor(private annonceService : AnnonceService, private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.newAnnonce.user.firstName = this.firstName;
    this.newAnnonce.user.lastName = this.lastName;
    this.newAnnonce.user.mail = this.mail;
    this.newAnnonce.user.phoneNumber = this.phoneNumber;
    this.newAnnonce.user.id = this.id;
    this.newAnnonce.creationDate = this.currentDate;
  }
  onSubmit(f: NgForm)
  {
    this.annonceService.addAnnonce(this.newAnnonce);
    console.log(this.newAnnonce);
    Swal.fire('Bonjour '+this.firstName, 'Votre annonce est en cours de vérification ', 'success');

  }

  onClick() {
    this.verif1 = true;
    this.verif2 = true;

  }

  onClick2() {
    this.verif1 = false;
    this.verif2 = true;
  }

  onClick3(){
    this.verif3 = true;
  }

}
