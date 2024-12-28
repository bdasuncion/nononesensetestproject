import { Schema, model, connect, Document } from 'mongoose';

interface StepInterface {
    title:string;
    result:string;
    imageURL:string;
}

interface QuestionInterface extends Document{
    question: string;
    solution: string;
    correctAnswer: string;
    options: string[];
    steps: StepInterface[];
    imageURL: string;
    category: string;
  }

  const questionSchema = new Schema({
    question: { type: String, unique:true, required: true },
    solution: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    options: [{type: String, required: true}], 
    steps:[{type: Schema.Types.Mixed, required: false}],
    imageURL:{type: Schema.Types.Mixed, required: false},
    category: {type: Schema.Types.String, required: false}
  });
  
  const QuestionsModel = model<QuestionInterface>('Questions', questionSchema);
  
  export default QuestionsModel;