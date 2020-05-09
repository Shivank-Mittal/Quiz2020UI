import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/userLogin',pathMatch:'full'},
  {path :'createQuiz',component:CreateQuizComponent},
  {path :'userLogin',component:QuizLoginComponent},
  {path:'**',component:PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =[
  CreateQuizComponent
]
