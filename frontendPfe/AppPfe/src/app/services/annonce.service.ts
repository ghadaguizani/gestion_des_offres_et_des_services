import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private httpClient:HttpClient) {
   }
   getAllAnnonces():Observable<any>
   {
    return this.httpClient.get("http://localhost:8093/annonces");

   }

   getAllDisabledAnnonce():Observable<any>{
    return this.httpClient.get("http://localhost:8093/api/admin/disabledAnnonces");
  }
  
  getAllEnabledAnnonce():Observable<any>{
    return this.httpClient.get("http://localhost:8093/api/admin/enabledAnnonces");
  }

   getAnnonceByKeyword(keyword):Observable<any>
   {
     let url="http://localhost:8093/annoncesByKeyword?keyword=";
     let baseUrl=url.concat(keyword);
     return this.httpClient.get(baseUrl);
   }

   addAnnonce(newAnnonce:Annonce){
     const headers = {'content-type' : 'application/json'};
     const body = JSON.stringify(newAnnonce);
    return this.httpClient.post<any>("http://localhost:8093/add-annonce",body,{'headers':headers}).subscribe(data =>{
       data.id;
     });
   }

  

  consulterAnnonce(id:number) : Observable<any>{
    let url = "http://localhost:8093/annonce/";
    let baseUrl = url.concat(id.toString());
    return this.httpClient.get(baseUrl);
  }
  

  deleteAnnonce(id:any):Observable<any>{
    let url="http://localhost:8093/annonce/";
    let baseUrl = url.concat(id.toString());
    return this.httpClient.delete(baseUrl);
  }

  getAnnoncessByUser():Observable<any>{
    let url = "http://localhost:8093/annoncesByUserId";
   // let baseUrl = url.concat(mail.toString());
    return this.httpClient.get(url);
  }

  updateAnnonce(annonce : Annonce ) {
    this.deleteAnnonce(annonce);
    this.addAnnonce(annonce);
  }

  activerAnnonce(id:number, enabled:boolean) {
    const headers = {'content-type' : 'application/json'}
    const body = JSON.stringify({enabled});
    let url = 'http://localhost:8093/api/admin/enableAnnonce/';
    let baseUrl = url.concat(id.toString());
   return  this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe(data=>
    {data.id}
     );
  
  } 
  
  desactiverAnnonce(id:number, enabled:boolean) {
    const headers = {'content-type' : 'application/json'}
    const body = JSON.stringify({enabled});
    let url = 'http://localhost:8093/api/admin/disableAnnonce/';
    let baseUrl = url.concat(id.toString());
   return  this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe(data=>
    {data.id}
     );
  
  } 

}
