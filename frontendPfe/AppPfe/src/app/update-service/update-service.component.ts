import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Servicee } from '../model/servicee';
import { Category } from '../enum/category';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  id:number;
  cat = Category.BRICOLAGE;
  currentService = new Servicee();
  isLoggedIn = false;
  firstName : string;
  constructor(private activatedRoute : ActivatedRoute, private service : ServicesService, private tokenStorageService : TokenStorageService, private router : Router) { }
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.firstName = user.firstName;
      this.id = user.id;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.consulterService(this.id).subscribe(
      res => {
        this.currentService = res;
        console.log(this.currentService);
        console.log(this.currentService.feedbacks);
       
      }
     
    )
    
  }}

  onSubmit(f: NgForm){
    this.service.updateService(this.currentService);
    Swal.fire('Bonjour '+this.firstName, 'votre publication a été modifiée avec succès.', 'success');
    this.router.navigate(['/profil',this.id])
  }
 
  onReset(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.consulterService(this.id).subscribe(
      res => {
        this.currentService = res;
  })
}

}
