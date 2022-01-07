import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { Page } from "src/enums/Page";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate() {
    const authorized = await this.authService.isAuthorized()
    if (authorized) {
      return true
    } else {
      this.router.navigate([`/${Page.HOME}`])
      return false
    }
  }

  canActivateChild = () => {
    return this.canActivate()
  }
}
