import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../enum/sub-category';
import { TokenStorageService } from '../services/token-storage.service';
import { Servicee } from '../model/servicee';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {
  subCategory: SubCategory[];
  newService: Servicee = new Servicee();

  verif1 : boolean = false;
  verif2 : boolean = false;
  verif3 : boolean = false;
  user = this.tokenStorageService.getUser();
  firstName: string = this.user.firstName;
  lastName: string = this.user.lastName;
  mail: string = this.user.mail;
  phoneNumber: string = this.user.phoneNumber;
  id: number = this.user.id;
  currentDate = new Date();
  private roles: string[] = [];
  isLoggedIn = false;
  fileName: string ;
  profilPicture: string;
  test:boolean = false;
  constructor(private tokenStorageService: TokenStorageService, private service: ServicesService) { }

  ngOnInit(): void {
    console.log(this.user);
    console.log("first name is " + this.firstName);
    this.newService.user.firstName = this.firstName;
    this.newService.user.lastName = this.lastName;
    this.newService.user.mail = this.mail;
    this.newService.user.phoneNumber = this.phoneNumber;
    this.newService.user.id = this.id;
    this.newService.creationDate = this.currentDate;
    console.log("aaaa" + this.newService.user.id);
    console.log("ccc" + this.newService);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.profilPicture = user.photoDeProfil;
    }

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

  onSubmit(f: NgForm) {
    this.service.addService(this.newService);
    console.log("bbb" + this.newService);
    Swal.fire('Bonjour '+this.firstName, 'Votre publication est en cours de vérification', 'success');

    //console.log("category"+this.newService.category);
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  

  selectFile(event): void {
    if (event.target.files.length > 0) {
      this.service.upload(event.target.files[0]).subscribe(
        data => {
          this.fileName = data.message;
          console.log(data);
          console.log(this.fileName);
          this.newService.picture = this.fileName;
        },
        err => {


        }
      );
    }
  }

  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
}
