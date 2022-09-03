import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Servicee } from 'src/app/model/servicee';
@Component({
  selector: 'app-service-by-user',
  templateUrl: './service-by-user.component.html',
  styleUrls: ['./service-by-user.component.css']
})
export class ServiceByUserComponent implements OnInit {

  services : Servicee[];
  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.service.getServicesByUser().subscribe(resp => {
      this.services = Object.values(resp);
      console.log("aaa" + this.services);
    })
    console.log("aaa" + this.services);
  }

  getServices() {
    this.service.getServicesByUser().subscribe(resp => {
      this.services = Object.values(resp);
      console.log("aaa" + this.services);
    })
    console.log("aaa" + this.services);
  }

  deleteService(id:any) {
    let conf=confirm("etes vous sur?")
    if(conf)
   {
    this.service.deleteService(id).subscribe(
      resp=>{
        console.log(resp);
        location.reload();
      },err=>{
        console.log("error");
        
      }
    );
   }
  }

}
