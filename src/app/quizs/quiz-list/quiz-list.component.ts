import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../controller/service/quiz.service';
import {Question} from '../../controller/model/question.model';
import {Reponse} from '../../controller/model/reponse.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {


  constructor(private quizService: QuizService) { }
  get questions(): Array<Question> {
    return this.quizService.questions;
  }
  get reponses(): Array<Reponse> {
    return this.quizService.reponses;
  }

  ngOnInit(): void {
  }

}
