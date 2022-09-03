import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Chart } from 'chart.js';
import { ServicesService } from 'src/app/services/services.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  services : any;
  constructor(private service : ServicesService, private httpClient : HttpClient){}
  
  public chart: any = null;

   
  ngOnInit() {
    this.service.countByCategory().subscribe(resp=>{
     this.services = Object.values(resp);
     const ctx = 'myChart';
     
     const myChart = new Chart(ctx, {
       type: 'pie',
     
       data: {
         labels: ['BRICOLAGE','SERVICES_GENERAUX','JARDINAGE','AIDE_A_DOMICILE','MENAGE','DEMANAGEMENT'],
         datasets: [
           {
             
             label: 'Graphe de répartition des services par catégorie',
 
             data:[this.services[0],this.services[1],this.services[2],this.services[3],this.services[4],this.services[5]] ,
             backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
             ],
             borderWidth: 1,
           },
         ],
       },
     });
   }); 


 

 }
}
