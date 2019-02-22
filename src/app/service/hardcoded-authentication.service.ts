import { Injectable } from '@angular/core';

//makes it a service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    //console.log('before ' + this.isUserLoggedIn());
    if(username === "yichen" && password === '123456'){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
