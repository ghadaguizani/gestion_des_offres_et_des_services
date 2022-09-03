import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ServicesEnAttenteDataSource, ServicesEnAttenteItem } from './services-en-attente-datasource';
import { Servicee } from '../model/servicee';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-services-en-attente',
  templateUrl: './services-en-attente.component.html',
  styleUrls: ['./services-en-attente.component.css']
})
export class ServicesEnAttenteComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ServicesEnAttenteItem>;
  dataSource: ServicesEnAttenteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  services : Servicee[] = [];
  constructor(private service : ServicesService) {
     this.dataSource = new ServicesEnAttenteDataSource();
  /* this.service.getAllDisabledService().subscribe(resp=>{
    this.services = Object.values(resp);
    console.log(this.services);
  }) */

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
