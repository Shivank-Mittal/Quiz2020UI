import { Component, OnInit, ɵConsole } from '@angular/core';
import { Question }from '../../datamodel/question';
import { FormGroup, FormBuilder,FormArray } from '@angular/forms'; 
import { QuizSetUPService } from 'src/app/services/quiz-set-up.service';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  
  numberOfQuestions=["Question1"];
  questionModel = new Question(null,"");

  questionAnswer: FormGroup;

  constructor( private quizSetupService :QuizSetUPService ) { }

  ngOnInit(): void {
   
  }

  

  onQuestionAdd(){
    var count:number = this.numberOfQuestions.length;
    this.numberOfQuestions.push("question"+(count+1));

  }

  
  onSave(values){

    for(let question of this.numberOfQuestions ){
      if(values[question].questionContent != ""){
       var insertedQuestion:Question = this.saveQuestion(values[question]);
      }
    }
  }

  saveQuestion(value){
    this.questionModel.title=value.questionContent;
    console.log(value);

    var newQuestion ;
    this.quizSetupService.addQuestion(this.questionModel)
    .subscribe
    (data => {newQuestion = <Question>data; console.log(data)},
    (error)=>{console.log(error)},
    () =>    {console.log("completed")
  
    this.saveAnswer(newQuestion,value.answer1);
    this.saveAnswer(newQuestion,value.answer2);
    this.saveAnswer(newQuestion,value.answer3);
    this.saveAnswer(newQuestion,value.answer4);}
    );

    return newQuestion
  }

  saveAnswer(question :Question,content:string){

    this.quizSetupService.addAnswer(question,content);
  }
}
