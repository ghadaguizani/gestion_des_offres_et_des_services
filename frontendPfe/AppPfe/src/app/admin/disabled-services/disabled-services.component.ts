import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ServicesService } from 'src/app/services/services.service';
import { Servicee } from 'src/app/model/servicee';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-disabled-services',
  templateUrl: './disabled-services.component.html',
  styleUrls: ['./disabled-services.component.css']
})
export class DisabledServicesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'category', 'subCategory', 'creationDate', 'location','boutton'];
  dataSource: MatTableDataSource<any>;
  services : Servicee[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service : ServicesService) {
    this.service.getAllDisabledService().subscribe(resp=>{
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

  activerService(id:number, enabled:boolean)
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
        this.service.activerService(id,enabled);
        //Swal.fire('Removed!', 'Product removed successfully.', 'success');
        window.location.reload();
        window.location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Service reste désactivé.', 'error');
      }
    });
  }

  

  ngOnInit(): void {
  }

}
