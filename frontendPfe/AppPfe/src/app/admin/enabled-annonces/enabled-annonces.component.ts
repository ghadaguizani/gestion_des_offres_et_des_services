import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { AnnonceService } from 'src/app/services/annonce.service';
@Component({
  selector: 'app-enabled-annonces',
  templateUrl: './enabled-annonces.component.html',
  styleUrls: ['./enabled-annonces.component.css']
})
export class EnabledAnnoncesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'category', 'subCategory', 'creationDate', 'location', 'boutton'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private annonceService : AnnonceService) { 
    this.annonceService.getAllEnabledAnnonce().subscribe(resp=>{
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

  desactiverAnnonce(id:number, enabled: boolean){
    Swal.fire({
      title: 'Êtes-vous sûr?',
     // text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non, laisse-moi réfléchir',
    }).then((result) => {
      if (result.value) {
        this.annonceService.desactiverAnnonce(id,enabled);
        //Swal.fire('Removed!', 'Product removed successfully.', 'success');
        window.location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Annonce reste activée.', 'error');
      }
    });
  }

  ngOnInit(): void {
  }

}
