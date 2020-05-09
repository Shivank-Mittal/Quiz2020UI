import { Question } from './question';
import { User } from './user';

export class Answer{
    id:number;
    content :string;
    question:Question;
    user:User

    constructor(id:number,content:string,question:Question,user:User){
        this.id= id;
        this.content= content;
        this.question= question;
        this.user= user;
    }

}