import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AjoutServiceGuard implements CanActivate {
  constructor(private router:Router, private tokenStorageService :TokenStorageService){}
  isLoggedIn=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(this.isLoggedIn)
    return true;
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
