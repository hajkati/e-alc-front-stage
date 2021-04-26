import {Reponse} from './reponse.model';
import {TypeDeQuestion} from './type-de-question.model';
import {Quiz} from './quiz.model';

export class Question {
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // @ts-ignore
  public id: number;
  // @ts-
  // @ts-ignore
  public numero: number;
  // @ts-ignore
  public ref: string;
  // @ts-ignore
  public libelle: string;
  // @ts-ignore
  public pointReponseJuste: number;
  // @ts-ignore
  public pointReponsefausse: number;
  // @ts-ignore
  public type = new TypeDeQuestion();
  public reponses = new Array<Reponse>();
  public quiz = new Quiz();
  // @ts-ignore
}
