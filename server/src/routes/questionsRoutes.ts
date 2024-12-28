//const express = require('express');
import express, {Router, Express, Request, Response} from "express"
import QuestionsModel from "../models/questionModel"

const questionRouter:Router = express.Router();

questionRouter.get('/', async (req:Request, res:Response) => {
    console.log(req.query)
    var filter:any = {};
    if (!(req.query.question === undefined)) {
        filter['question'] = req.query.question    
    }
    if (!(req.query.category === undefined)) {
        filter['category'] = req.query.category    
    }
    if (!(req.query.answer === undefined)) {
        filter['answer'] = req.query.answer    
    }

    const questions = await QuestionsModel.find(filter).exec();
    const returnQuestions = questions.map((question:any) => ( {
        id: question.id,
        question: question.question,
        solution: question.solution,
        correctAnswer: question.correctAnswer,
        options: question.options,
        steps: question.steps,
        imageURL: question.imageURL,
        category: question.category
    }))
    console.log(questions)
    res.status(200).json({ questions: returnQuestions });
})

questionRouter.get('/json/:id', async (req:Request, res:Response) => {
    const question = await QuestionsModel.findById(req.params.id).exec();
    res.status(200).json({ question: question });
})

questionRouter.delete('/:id', async (req:Request, res:Response) => {
    console.log(req.params.id)
    const result = await QuestionsModel.findByIdAndDelete(req.params.id).exec();
    res.status(200).json({ deleted: result });
})

questionRouter.put('/:id', async (req:Request, res:Response) => {
    var update = {
        question: req.body.question,
        solution: req.body.solution,
        correctAnswer: req.body.correctAnswer,
        options: req.body.options,
        steps: req.body.steps,
        imageURL: req.body.imageURL,
        category: req.body.category
    }
    console.log(update)
    const result = await QuestionsModel.findByIdAndUpdate(req.params.id, update).exec();
    res.status(200).json({ updated: update });
})

questionRouter.post('/', async (req:Request, res:Response) => {
    const question:InstanceType<typeof QuestionsModel> = new QuestionsModel({
        question: req.body.question,
        solution: req.body.solution,
        correctAnswer: req.body.correctAnswer,
        options: req.body.options,
        steps: req.body.steps,
        imageURL: req.body.imageURL,
        category: req.body.category
    });
    await question.save()
    res.status(200).json({ message: question });
})

export default questionRouter;