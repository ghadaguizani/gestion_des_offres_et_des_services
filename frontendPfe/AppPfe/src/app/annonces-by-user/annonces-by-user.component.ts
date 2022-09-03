import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../model/annonce';
@Component({
  selector: 'app-annonces-by-user',
  templateUrl: './annonces-by-user.component.html',
  styleUrls: ['./annonces-by-user.component.css']
})
export class AnnoncesByUserComponent implements OnInit {

  annonces : Annonce[];
  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.annonceService.getAnnoncessByUser().subscribe(resp => {
      this.annonces = Object.values(resp);
    })
  }

}
