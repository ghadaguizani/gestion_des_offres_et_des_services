import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Servicee } from '../model/servicee';
import { Feedback } from '../model/feedback';
import { User } from '../model/user';
import { TokenStorageService } from '../services/token-storage.service';
import { FeedbackService } from '../services/feedback.service';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  id: number;
  Commentaires: Feedback[];
  currentService: Servicee;
  user: User;
  nb: number;
  isLoggedIn = false;
  newFeedback = new Feedback();
  idUser: any;
  currentDate = new Date();
  profilPicture : string;
  roles : string[] = [];
  verif : boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private service: ServicesService, private tokenStorageService: TokenStorageService, private feedbackService: FeedbackService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.idUser = user.id;
      this.profilPicture = user.photoDeProfil;
      this.newFeedback.user.id = this.idUser;
      this.newFeedback.service.id = this.id;
      this.newFeedback.creationDate = this.currentDate;
      this.roles = this.tokenStorageService.getUser().roles;
      console.log(this.roles);
      this.roles.forEach(role=>{
        if(role =="ROLE_ADMIN"){
          this.verif = true;
        }
      })
    }

    

    this.service.consulterService(this.id).subscribe(
      res => {
        this.currentService = res;
        console.log(this.currentService);
        console.log(this.currentService.feedbacks);
        this.Commentaires = this.currentService.feedbacks;
        this.nb = this.Commentaires.length;
      }
    )
  }
  onSubmit(f: NgForm) {
    this.feedbackService.addFeedback(this.newFeedback);
    console.log("com" + this.newFeedback);
    f.onReset();
    location.reload();
  }

  deleteFeedback(id:any){
    let conf=confirm("etes vous sur?")
    if(conf)
    {this.feedbackService.deleteFeedback(id).subscribe(
      resp=>{
        console.log(resp);
        location.reload();
      },err=>{
        console.log("error");
        
      }
    );}
  }


}
