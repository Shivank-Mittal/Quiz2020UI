import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../datamodel/question';
import { UserService } from './user.service';
import { User } from '../datamodel/user';
import { Answer } from '../datamodel/answerDataModel';

@Injectable({
  providedIn: 'root'
})
export class QuizSetUPService {

  answerDataModel: Answer = new Answer(null,"",null,null);
  user:User ;
  constructor(private httpClient : HttpClient, private userService :UserService) { }

  questionURL = "http://localhost:8080/quiz-rest/rest/question";
  answerURL ="http://localhost:8080/quiz-rest/rest/exam/answer";

  
  
  addQuestion(question :Question){
   return this.httpClient.post(this.questionURL,question)
   
  }

  addAnswer(question: Question,content){
    this.user = this.userService.getUser();
    // console.log(this.user);
    // console.log(question);
    // console.log(content);

    this.answerDataModel.content=content;
    this.answerDataModel.question=question;
    this.answerDataModel.user=this.user;
    console.log(this.answerDataModel);

    this.httpClient.post(this.answerURL,this.answerDataModel).subscribe(
      (errror) => {console.log(errror)} 
    );

  }
}
