import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   // users:Array<User>= [];
   users:User[];
   user:any=new User();
   verif:any;
      constructor(private httpClient:HttpClient) { 
        console.log("mmmmmmmmmmmmmmmmmm");
        this.httpClient.get("http://localhost:8093/users").subscribe(
          resp=>{
            this.users=Object.values(resp);
   

          }
        )
         
          }
          updatePassword(password:string,newPassword:string,id:number){

             const headers = { 'content-type': 'application/json'}  
    
     //const body={password,newPassword}
     const body=JSON.stringify({password,newPassword})
    let url='http://localhost:8093/spring/api/update-password/';
    let baseUrl=url.concat(id.toString());
    /* this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe(data=>
      {data.id
      }); */
     return this.httpClient.post<any>(baseUrl,body,{'headers':headers}).subscribe
      
      (
        data=>{data.id}
        );

    }
   
          


     

       async consulterUser(id:number): Promise<User>{
            
let user = new User() ;

//interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée Promise
 await this.httpClient.get("http://localhost:8093/spring/api/users").toPromise().then(
            resp =>{
              console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
              let result = Object.values(resp as User[]).find(p => p.id== id);
            if(result != undefined)
            user = result;

            }
          )

          

         return user;
         
               }

              
              
   
          deleteUser(id:any):Observable<any>
          {
            let url='http://localhost:8093/spring/api/supprim-user/';
            let baseurl=url.concat(id.toString());
            return this.httpClient.delete(baseurl);
          }
       
        
          addUser(newUser:User):any{
            const headers = { 'content-type': 'application/json'}  
            const body=JSON.stringify(newUser);
            this.httpClient.post<any>('http://localhost:8093/spring/api/add-user',body,{'headers':headers}).subscribe(data =>
            {
               console.log(data),console.log(data.id);
              console.log(data.idUser);
              localStorage.setItem('id', data.id);
              localStorage.setItem('nom', data.lastName);
              localStorage.setItem('prenom', data.firstName);
              localStorage.setItem('mail', data.mail);
           //   localStorage.setItem('mdp', data.mdpUser);
              localStorage.setItem('num', data.phoneNumber);
           //   localStorage.setItem('date naissance', data.dateNaissance); 
          }
          )
          }
          updateUser(u:User)
          {
          // console.log(p);
          this.deleteUser(u);
          this.addUser(u);
         console.log("le mot de passe  de l'utilisateur modifié est "+u.password);

          }
       
         /* updateUser(u:any)
          {
            this.deleteUser(u);
            this.addUser(u);
            console.log("l nom de l'utilisateur modifié est "+u.nomUser);
          }*/
       
           
}
