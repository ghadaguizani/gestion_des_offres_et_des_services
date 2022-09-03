import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:8093/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false;

  constructor(private http: HttpClient , private tokenStorageService:TokenStorageService) { 
  }


  public login(mail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      mail,
      password
    }, httpOptions);
  }
  
   public register(firstName: string, lastName: string, mail: string, phoneNumber: string, password: string, fileName: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName,
      lastName,
      mail,
      phoneNumber,
      password, 
      fileName
    }, httpOptions);
  } 

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(AUTH_API + 'upload' , formData) ;
  }
  
}
