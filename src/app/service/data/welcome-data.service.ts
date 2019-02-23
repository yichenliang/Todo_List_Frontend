import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) {
      
   }

  executedHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

  executedHelloWorldServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
                                          //{headers : header}
                                        );
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'yichen'
  //   let password = '123456'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
