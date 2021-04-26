import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// @ts-ignore
import { QiuzsComponent } from './qiuzs/qiuzs.component';
import { QuizsComponent } from './quizs/quizs.component';
import { QuizCreateComponent } from './quizs/quiz-create/quiz-create.component';
import { QuizListComponent } from './quizs/quiz-list/quiz-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizsComponent,
    QuizCreateComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
