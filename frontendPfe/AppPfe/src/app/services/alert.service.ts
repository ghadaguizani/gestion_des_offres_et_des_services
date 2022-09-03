import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
    providedIn: 'root'
  })
export class alertService
{
    ngOnInit() {
        console.log('Life Cyle Hook with spontaneous response.');
      }
      tinyAlert() {
        Swal.fire('Nous n’avons pas trouvé de compte correspondant à ce que vous avez entré!');
      }
      tinyAlertt() {
        Swal.fire('Votre compte a été modifié avec succés !');
      }
      successNotification() {
        Swal.fire('Bienvenue sur notre app', 'Votre compte a été créé avec succès','success');
      }
      alertConfirmation() {
        Swal.fire({
          title: 'Are you sure?',
          text: 'This process is irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, go ahead.',
          cancelButtonText: 'No, let me think',
        }).then((result) => {
          if (result.value) {
            Swal.fire('Removed!', 'Product removed successfully.', 'success');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Product still in our database.)', 'error');
          }
        });
      }
}