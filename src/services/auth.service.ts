import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authorized = false;

  login = () => {
    this.authorized = true;
  }

  logout = () => {
    this.authorized = false;
  }

  isAuthorized = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.authorized)
      },
        1000
      )
    })
  }
}