import { Request, Response } from "express";

export let home = (req: Request, res: Response) =>{
    res.send('Home no controller');
    //res.send('pages/page');
};

export let dogs = (req: Request, res: Response) =>{

    //res.send('pages/page');
};

export let cats = (req: Request, res: Response) =>{

    //res.send('pages/page');
};

export let fishes = (req: Request, res: Response) =>{

    //res.send('pages/page');
};