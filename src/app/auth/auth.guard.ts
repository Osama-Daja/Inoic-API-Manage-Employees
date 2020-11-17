import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router,private service : ServiceService ) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null)
    {
      let roles = next.data['permittedRoles'] as Array<string>;
      if (roles)
      {
        if (this.service.roleMatch(roles)){ return true; }
        else
        {
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/tabs/login']);
      return false;
    }

  }
}
