import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { User } from '../datamodel/user';
import { catchError } from 'rxjs/operators';

import { error } from 'protractor';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ="http://localhost:8080/quiz-rest/rest/user";
  constructor( private httpClient :HttpClient) { }

 currentUser:User;

  checkUser(user : User){
     
    var userDetails = this.httpClient.get<User>(this.userUrl+"/"+user.loginName);

     userDetails.subscribe((data) => this.currentUser = data, () => { console.log( "userservice + " +this.currentUser);})
     console.log(this.currentUser);
     return userDetails ;
  }

  saveUser(user:User){
    console.log( user.email + " / " + user.loginName); 
    return this.httpClient.post(this.userUrl, user );
  }

  getUser(){

    console.log(this.currentUser);
    return this.currentUser;
  }

  
}
