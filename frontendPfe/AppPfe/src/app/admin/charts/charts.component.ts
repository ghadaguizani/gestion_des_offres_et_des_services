import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/services/services.service';
import { Servicee } from 'src/app/model/servicee';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  category:any="BRICOLAGE";
  services :any;
  constructor(private service : ServicesService, private httpClient : HttpClient){
    this.service.countByCategory().subscribe(resp=>{
      this.services = Object.values(resp);
      console.log(this.services);
      console.log(this.services[0]);
    })
  }
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  
  public doughnutChartLabels: Label[] = ['bricolage','jardinage'];
  public doughnutChartData: SingleDataSet = [10,10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];

}
