import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  users:Array<User>= [];

user:any =new User();
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get("http://localhost:8093/users").subscribe(
      resp=>{
        this.users=Object.values(resp);

      }
    )
    console.log("users:"+this.users);
     
      }
      consulterUser(id:number): User{
        // console.log(this.admins);
       this.user=this.users.find(p => p.id== id);
       return this.user;
           }

      signUp(user:User):boolean
      {
        console.log(this.users)
        let verif:boolean=true;
        this.users.forEach((curUser=>{
           
if(curUser.mail===user.mail)
{
  verif=false;
 
}
/*else 
{
  return;
}*/

}
          ))
          return verif;
      }
    
      addUser(newUser:User):any{
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(newUser);
        this.httpClient.post<any>('http://localhost:8093/spring/api/add-user',body,{'headers':headers}).subscribe(data =>{console.log(data),console.log(data.idUser);
         ///console.log(data.idUser);
          localStorage.setItem('id', data.idUser);
          localStorage.setItem('nom', data.nomUser);
          localStorage.setItem('prenom', data.prenomUser);
          localStorage.setItem('mail', data.mailUser);
          localStorage.setItem('mdp', data.mdpUser);
          localStorage.setItem('num', data.numUser);
          localStorage.setItem('date naissance', data.dateNaissance);



      })
      }
  
    
  }

