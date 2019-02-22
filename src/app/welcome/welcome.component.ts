import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

// decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   
  message : string = 'Some Welcome Message'
  welcomeMessageFromService : string
  name = ''

  constructor(
              private route: ActivatedRoute,
              private service: WelcomeDataService) {

  }

  ngOnInit() {
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executedHelloWorldBeanService());
    this.service.executedHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome message");
   // console.log('last line of getWelcomeMessage')
  }

  handleSuccessResponse(response){
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }
  
  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
