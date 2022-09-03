import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  private roles: string[] = [];
  isLoggedIn = false;
  firstName:string;
  lastName:string;
  profilPicture : string;
  id : number;
  verif : boolean = false;
  constructor(private tokenStorageService:TokenStorageService ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profilPicture = user.photoDeProfil;
      
      this.roles.forEach(role=>{
        if (role=="ROLE_ADMIN"){
          this.verif = true;
        }
      })
    }  

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

}
