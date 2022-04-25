import { Request, Response } from "express";
import { pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";


export let search = (req: Request, res: Response) =>{
    let query: string = req.query.q as string;

    let list = pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    }); 
    
};