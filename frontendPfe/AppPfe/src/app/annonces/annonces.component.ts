import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Annonce } from '../model/annonce';
import { AnnonceService } from '../services/annonce.service';
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  firstName: string;
  lastName: string;
  profilPicture: string;
  search = '';
  annonces: Annonce[];
  text = '';
  searchText: string;
  id: number;
  verif : boolean = false;
  constructor(private tokenStorageService: TokenStorageService, private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profilPicture = user.photoDeProfil;
      
      this.roles.forEach(role=>{
        if (role=="ROLE_ADMIN"){
          this.verif = true;
        }
      })
    }
    this.annonceService.getAllAnnonces().subscribe(resp => {
      this.annonces = Object.values(resp);

    }
    )
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  searchByKeyword(keyword: any) {


    this.text = keyword.target.value;
    this.annonceService.getAnnonceByKeyword(this.text).subscribe(resp => {
      this.annonces = Object.values(resp);
    })
  }

}