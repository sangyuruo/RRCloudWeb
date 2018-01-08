import { Injectable } from '@angular/core';
import {NbAuthService} from "./@nebular/auth/services/auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
        console.log(authenticated)
      });
  }

}
