//const express = require('express');
import express, {Router, Express, Request, Response} from "express"
import CategoriesModel from "../models/categoryModel"

const categoryRouter:Router = express.Router();

categoryRouter.get('/', async (req:Request, res:Response) => {
    const categories = await CategoriesModel.find().exec();
    const returnCategories = categories.map((category:any) => ( {
        id: category.id,
        name: category.name,
    }))
    res.status(200).json({ categories: returnCategories });
})

categoryRouter.delete('/:id', async (req:Request, res:Response) => {
    const result = await CategoriesModel.findByIdAndDelete(req.params.id).exec();
    res.status(200).json({ deleted: result });
})

categoryRouter.put('/:id', async (req:Request, res:Response) => {
    var update = {
        name: req.body.name,
    }

    const result = await CategoriesModel.findByIdAndUpdate(req.params.id, update).exec();
    res.status(200).json({ updated: update });
})

categoryRouter.post('/', async (req:Request, res:Response) => {
    const category:InstanceType<typeof CategoriesModel> = new CategoriesModel({
        name: req.body.name,
    });
    await category.save()
    res.status(200).json({ message: category });
})

export default categoryRouter;