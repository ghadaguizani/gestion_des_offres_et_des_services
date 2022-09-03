import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicee } from '../model/servicee';
import { ServicesService } from '../services/services.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-services-existants',
  templateUrl: './services-existants.component.html',
  styleUrls: ['./services-existants.component.css']
})
export class ServicesExistantsComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  firstName: string;
  lastName: string;
  profilPicture: string;
  search = '';
  services: Servicee[];
  category: any;
  id: any;
  s: any;
  cat: any;
  text = '';
  verif : boolean = false;
  constructor(private service: ServicesService, private activatedRoute: ActivatedRoute, private tokenStorageService: TokenStorageService) {
    this.category = this.activatedRoute.snapshot.params['category'];

    console.log(this.category);

    this.service.getServiceByCategory(this.category).subscribe(resp => {

      this.services = Object.values(resp);
      console.log(this.services);

    }, err => {
      console.log("error");
    }
    )
    // this.cat = this.category.toLowerCase();
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
        if(role="ROLE_ADMIN"){
          this.verif = true;
        }
      })
    }

    window.addEventListener('DOMContentLoaded', () => {
      let scrollPos = 0;
      const mainNav = document.getElementById('mainNav');

    })

    window.addEventListener('DOMContentLoaded', event => {

      // Navbar shrink function
      var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
          return;
        }
        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
        } else {
          navbarCollapsible.classList.add('navbar-shrink')
        }

      };

      // Shrink the navbar 
      navbarShrink();

      // Shrink the navbar when page is scrolled
      document.addEventListener('scroll', navbarShrink);

      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector('#mainNav');
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
      );


    });


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
