import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Category } from '../enum/category';
import { SubCategory } from '../enum/sub-category';
import { Servicee } from '../model/servicee';
import { TokenStorageService } from './token-storage.service';
import { map } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  service:any;
  constructor(private httpClient:HttpClient, private tokenStorageService : TokenStorageService) { }

getAllDisabledService():Observable<any>{
  return this.httpClient.get("http://localhost:8093/api/admin/disabledServices");
}

getAllEnabledService():Observable<any>{
  return this.httpClient.get("http://localhost:8093/api/admin/enabledServices");
}

getAllService(): Observable<any>{
  return this.httpClient.get("http://localhost:8093/services").pipe(map((resp)=>resp));
}

getServiceByCategory(category:Category):Observable<any>{
  let url="http://localhost:8093/serviceByCategory?category=";
  let baseUrl=url.concat(category.toString());
  return this.httpClient.get(baseUrl);
}

getServiceBySubCategory(subCategory:SubCategory):Observable<any>
{
  let url="http://localhost:8093/serviceBySubCategory?subCategory=";
  let baseUrl=url.concat(subCategory.toString());
  return this.httpClient.get(baseUrl);
}

getServicesByUser():Observable<any>{
  let url = "http://localhost:8093/servicesByUserId";
 // let baseUrl = url.concat(mail.toString());
  return this.httpClient.get(url);
}

countByCategory():Observable<any>{
  let url = "http://localhost:8093/api/admin/stat/category";
  return this.httpClient.get(url);
}

/*async consulterService(id:number): Promise<Servicee>{
            
  let service = new Servicee() ;
  
  //interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée Promise
   await this.httpClient.get("http://localhost:8093/services").toPromise().then(
              resp =>{
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                let result = Object.values(resp as Servicee[]).find(p => p.id== id);
              if(result != undefined)
              service = result;
                
              }
            )
           return service;
           
}
*/
consulterService(id:number): Observable<any>
{
  let url = "http://localhost:8093/service/";
  let baseUrl = url.concat(id.toString());
  return this.httpClient.get(baseUrl);
}
deleteService(id:any): Observable<any>
{
  let url="http://localhost:8093/service/";
  let baseUrl = url.concat(id.toString());
  return this.httpClient.delete(baseUrl);
}

addService (newService:Servicee)
{
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newService);
   return this.httpClient.post<any>('http://localhost:8093/add-service',body,{'headers':headers}).subscribe(data => {
     data.id;
});

}


updateService(service:Servicee)
{
  this.deleteService(service);
  this.addService(service);
}



upload(file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file);
  return this.httpClient.post('http://localhost:8093/api/' + 'upload' , formData) ;
}


getServiceByKeyword(keyword):Observable<any>
{
  let url="http://localhost:8093/servicesByKeyword?keyword=";
  let baseUrl=url.concat(keyword);
  return this.httpClient.get(baseUrl);
}

  activerService(id:number, enabled:boolean) {
  const headers = {'content-type' : 'application/json'}
  const body = JSON.stringify({enabled});
  let url = 'http://localhost:8093/api/admin/enableService/';
  let baseUrl = url.concat(id.toString());
 return  this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe(data=>
  {data.id}
   );

} 

desactiverService(id:number, enabled:boolean) {
  const headers = {'content-type' : 'application/json'}
  const body = JSON.stringify({enabled});
  let url = 'http://localhost:8093/api/admin/disableService/';
  let baseUrl = url.concat(id.toString());
 return  this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe(data=>
  {data.id}
   );

} 




}
