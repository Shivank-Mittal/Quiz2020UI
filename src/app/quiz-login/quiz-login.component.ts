import { Component, OnInit } from '@angular/core';
import { User } from '../datamodel/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-login',
  templateUrl: './quiz-login.component.html',
  styleUrls: ['./quiz-login.component.css']
})
export class QuizLoginComponent implements OnInit {

  constructor(private userService :  UserService,private _router : Router) { }

  loginUserModel = new  User("" , "");
  signUpUserModel = new  User("" , "");
  invalidUser:boolean =false;

  ngOnInit(): void {}

  onSignIn(){
    var signedUser : User;
    // console.log(this.userModel);
    this.userService.checkUser(this.loginUserModel)
    .subscribe(
      (data) =>{  signedUser = data  },
      (error) =>{ console.log("error: " +error ) ;  this.invalidUser =true; },
      ()=> {
        if((signedUser.loginName == this.loginUserModel.loginName) && (signedUser.email == signedUser.email)){
          this._router.navigate(["/createQuiz"])
        }else{
          this.invalidUser= true;
        }
      }
    )
  }

  onSignUp(){
   
    this.userService.saveUser(this.signUpUserModel)
    .subscribe(
      data => {console.log(data);}
    )
  }


}
