import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Servicee } from '../model/servicee';
@Component({
  selector: 'app-jardinage',
  templateUrl: './jardinage.component.html',
  styleUrls: ['./jardinage.component.css']
})
export class JardinageComponent implements OnInit {

  Services:Servicee[];
  name:any;
  constructor(private service:ServicesService) {
this.name="JARDINAGE";
    service.getServiceByCategory(this.name).subscribe(resp=>
      {
        this.Services=Object.values(resp);
        console.log(this.Services);
      })
   }

  ngOnInit(): void {
   
  }

}
