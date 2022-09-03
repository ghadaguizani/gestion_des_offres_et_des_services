import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Servicee } from '../model/servicee';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-services-bricolage',
  templateUrl: './services-bricolage.component.html',
  styleUrls: ['./services-bricolage.component.css']
})
export class ServicesBricolageComponent implements OnInit {

  private roles: string[] = [];
  subCategory: any;
  services: Servicee[];
  cat: any;
  isLoggedIn = false;
  firstName: string;
  lastName: string;
  profilPicture: string;
  search = '';
  text = '';
  id: number;
  verif : boolean = false;
  constructor(private service: ServicesService, private activatedRoute: ActivatedRoute, private tokenStorageService : TokenStorageService) {
    this.subCategory = this.activatedRoute.snapshot.params['subCategory'];
    this.service.getServiceBySubCategory(this.subCategory).subscribe(resp => {
      this.services = Object.values(resp);
    }, err => {
      console.log("error");
    }
    )
   // this.cat = "Bricolage - " + this.subCategory.toLowerCase();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profilPicture = user.photoDeProfil;
      this.roles.forEach(role=>{
        if(role == "ROLE_ADMIN"){
          this.verif=true;
        }
      })
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  searchByKeyword(keyword: any) {

    this.text = keyword.target.value;
    this.service.getServiceByKeyword(this.text).subscribe(resp => {
      this.services = Object.values(resp);
    })
  }

}
