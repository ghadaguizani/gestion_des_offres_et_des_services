import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../model/annonce';
import { Category } from '../enum/category';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
  id:number;
  currentAnnonce = new Annonce();
  cat = Category.BRICOLAGE;
  isLoggedIn = false;
  firstName : string;
  constructor(private annonceService : AnnonceService, private activatedRoute : ActivatedRoute, private tokenStorageService : TokenStorageService, private router : Router) { }

  ngOnInit(): void { 
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.firstName = user.firstName;
      this.id = user.id;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.annonceService.consulterAnnonce(this.id).subscribe(
      res => {
        this.currentAnnonce = res;
        console.log(this.currentAnnonce);
        
       
      }
     
    )
    
  }
}

    onSubmit(f: NgForm){
    this.annonceService.updateAnnonce(this.currentAnnonce);
    Swal.fire('Bonjour '+this.firstName, 'votre annonce a été modifiée avec succès.', 'success');
    this.router.navigate(['/profil',this.id])
  }  

  onReset(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.annonceService.consulterAnnonce(this.id).subscribe(
      res => {
        this.currentAnnonce = res;
  })
}

  }
