import { Request, Response } from "express";

import { pet } from '../models/pet';

import { createMenuObject } from '../helpers/createMenuObject';

export let home = (req: Request, res: Response) =>{
    let list = pet.getAll();

    res.render('pages/page', {
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });

};

export let dogs = (req: Request, res: Response) =>{
    let list = pet.getFromType('dog');

    res.render('pages/page', {
        menu:createMenuObject('dog'),
        banner:{
            title:'Cachorros',
            background:'banner_dog.jpg'
        },
        list
    });
};

export let cats = (req: Request, res: Response) =>{
    let list = pet.getFromType('cat');

    res.render('pages/page', {
        menu:createMenuObject('cat'),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    });
};


export let fishes = (req: Request, res: Response) =>{
    let list = pet.getFromType('fish');

    res.render('pages/page', {
        menu:createMenuObject('fish'),
        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
        
    });
};
