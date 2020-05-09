import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizLoginComponent,
    routingComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }