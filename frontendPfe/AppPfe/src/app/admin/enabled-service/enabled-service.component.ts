import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesService } from 'src/app/services/services.service';
import { Servicee } from 'src/app/model/servicee';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-enabled-service',
  templateUrl: './enabled-service.component.html',
  styleUrls: ['./enabled-service.component.css']
})
export class EnabledServiceComponent implements OnInit {

  
  //services : Servicee[];
  displayedColumns: string[] = ['id', 'description', 'category', 'subCategory', 'creationDate', 'location', 'boutton'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service : ServicesService) { 
    this.service.getAllEnabledService().subscribe(resp=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  desactiverService(id:number, enabled:boolean)
  {
    Swal.fire({
      title: 'Êtes-vous sûr?',
     // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non, laisse-moi réfléchir',
    }).then((result) => {
      if (result.value) {
        this.service.desactiverService(id,enabled);
        //Swal.fire('Removed!', 'Product removed successfully.', 'success');
        window.location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Service reste activé.', 'error');
      }
    });
    
  }
/*  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.service.desactiverService(id,enabled);
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  } */
  ngOnInit(): void {
  }

}
