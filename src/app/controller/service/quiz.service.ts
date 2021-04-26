import { Injectable } from '@angular/core';
import {Reponse} from '../model/reponse.model';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {TypeDeQuestion} from '../model/type-de-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  get type(): TypeDeQuestion {
    // this.http.get(this._urlBase + this._urlType + '/');
    if (this._type == null){
      this._type = new TypeDeQuestion();
    }
    return this._type;
  }

  set type(value: TypeDeQuestion) {
    this._type = value;
  }
  get reponse(): Reponse {
    if (this._reponse == null) {
      this._reponse = new Reponse();
    }
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get reponses(): Array<Reponse> {
    if (this._reponses == null) {
      this._reponses = new Array<Reponse>();
    }
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }

  get question(): Question {
    if (this._question == null) {
      this._question = new Question();
    }
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get questions(): Array<Question> {
    if (this._questions == null) {
      // @ts-ignore
      this._questions = new Array<Question>();
    }
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }
  constructor(private http: HttpClient) {
  }
  get types(): Array<TypeDeQuestion> {
    this.http.get(this._urlBase + this._urlType + '/');
    return this._types;
  }

  set types(value: Array<TypeDeQuestion>) {
    this._types = value;
  }
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _reponse: Reponse;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _type: TypeDeQuestion;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _reponses: Array<Reponse>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _types: Array<TypeDeQuestion>;

// tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _question: Question;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _questions: Array<Question>;
  // tslint:disable-next-line:typed variable-names variable-name
public _urlBase = 'http://localhost:8036/';
// tslint:disable-next-line:variable-name
public _urlQuestion = 'centre/question';
// tslint:disable-next-line:variable-name
public _urlReponse = 'centre/reponse';
// tslint:disable-next-line:variable-name
public _urlType = 'centre/TypeDeQuestion';
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
// tslint:disable-next-line:typedef
  public save() {
    // @ts-ignore
    // @ts-ignore
     this.http.post<number>(this._urlBase + this._urlQuestion + '/', this.question).subscribe(
     data => {
     if (data > 0){
    // @ts-ignore
       this.questions.push(this.clone(this.question));
    // @ts-ignore
       this.question = null;
    // tslint:disable-next-line:align no-shadowed-variable no-unused-expression
    }else {
  console.log('error');
  }
  }
    );
  }
// tslint:disable-next-line:typedef
/*selectCorrect(){
  // tslint:disable-next-line:variable-name
    let _i = 0;
    this.question.correct = ['Vrai', 'Faux'];
    if (this.question.correct.indexOf('Vrai')){
     this.question.pointReponseJuste = _i++;
    }else if (this.question.correct.indexOf('Faux')){
      this.question.pointReponsefausse = _i++;
    }
}*/

// tslint:disable-next-line:typedef align
    public addReponse(){
      this.question.reponses.push(this.cloneRep(this.reponse));
      // @ts-ignore
      this.reponse = null;
    }
 /* }
);
}*/
// tslint:disable-next-line:typedef align
  public clone(question: Question) {
    const myQuestion = new Question();
    myQuestion.id = question.id;
    myQuestion.ref = question.ref;
    myQuestion.libelle = question.libelle;
    myQuestion.numero = question.numero;
    myQuestion.pointReponsefausse = question.pointReponsefausse;
    myQuestion.reponses = question.reponses;
    myQuestion.quiz = question.quiz;
    myQuestion.type = question.type;
    return myQuestion;
  }

// tslint:disable-next-line:typedef align
  public cloneRep(reponse: Reponse) {
    const mycloneRep = new Reponse();
    mycloneRep.id = reponse.id;
    // @ts-ignore
    mycloneRep.lib = reponse.lib;
    mycloneRep.numero = reponse.numero;
    mycloneRep.question = reponse.question;
    mycloneRep.correct = reponse.correct;
    mycloneRep.ref = reponse.ref;
    return mycloneRep;
  }
  // tslint:disable-next-line:typedef
  public addCard(){
    const elem = document.getElementById('addCard');
    // @ts-ignore
    const elemclone = elem.cloneNode(true);
    // @ts-ignore
    elem.appendChild(elemclone);
  }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  correct(e){
    if (e.checked){
      this.reponse.correct = true;
    }else if (!e.checked){
      this.reponse.correct = false;
    }
  }
  // tslint:disable-next-line:typedef
 /* public addFormule(){
    this.questions.push(this.clone(this.question));
  }*/
  // tslint:disable-next-line:typedef
  delete(index: number) {
    // @ts-ignore
    const reponse = this.reponse[index];
    /*this.http.delete(this._urlBase + this._urlReponse + '/ref/' + reponse.ref).subscribe(
      data => {*/
    this.question.reponses.splice(index, 1);
      }
   /* );
  }*/
}
