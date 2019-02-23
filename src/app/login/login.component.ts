import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'in28minutes'
  password = '' 
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // dependency injection
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

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

  handleBasicAuthLogin() {
    //console.log(this.username);
    //if(this.username === "yichen" && this.password === '123456'){
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          // redirect to the welcome page
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
      
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          // redirect to the welcome page
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
      
  }

}
