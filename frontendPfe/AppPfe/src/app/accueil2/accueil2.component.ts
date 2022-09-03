import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { NgForm } from '@angular/forms';
import { Message } from '../model/message';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-accueil2',
  templateUrl: './accueil2.component.html',
  styleUrls: ['./accueil2.component.css']
})
export class Accueil2Component implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  firstName: string;
  lastName: string;
  profilPicture: string;
  id: number;
  currentDate = new Date();
  newMessage : Message = new Message();
  verif : boolean = false;
  constructor(private tokenStorageService: TokenStorageService, private messageService : MessageService) { }
 
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.id = user.id;
      this.profilPicture = user.photoDeProfil;
      console.log(this.profilPicture);

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

  onSubmit(f: NgForm){
    this.newMessage.creationDate = this.currentDate;
    this.messageService.addMessage(this.newMessage);
    Swal.fire('Bonjour ', 'Votre message est bien reçu nous vous contactons le plus tôt possible', 'success');
    
  }

 

}
