import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'yichen'
  password = '' 
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // dependency injection
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username);
    //if(this.username === "yichen" && this.password === '123456'){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }

}
