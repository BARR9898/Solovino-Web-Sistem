import {  Request, Response } from 'express'


// Models
import Adoption from '../models/adoptions';


//GET ALL ADOPTIONS
export async function getAlllAdoptions(req: Request, res: Response): Promise<Response> {
    const adoptions = await Adoption.find();
    return res.json(adoptions);
};



//Create adoption
export async function createAdoption(req: Request, res: Response): Promise<Response> {
    const newAdoption = new Adoption({
        name_pet : req.body.name_pet ,  
        age_pet : req.body.age_pet,
        race_pet : req.body.race_pet,
        sex_pet : req.body.sex_pet,
        sterulization_pet :  req.body.sterulization_pet,
        description_pet : req.body.description_pet,
        is_exsolovino : req.body.is_exsolovino
    });
    await newAdoption.save();
    return res.json({
        message: 'Adoption Saved Successfully',
        newAdoption
    });
};

//Get adoption
export async function getAdoption(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const adaption = await Adoption.findById(id);
    return res.json(adaption);
}

//Delete adoption
export async function deleteAdoption(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await Adoption.findByIdAndRemove(id);
    return res.json({ message: 'Adoption Deleted' });
};

//Update adoption
export async function updateAdoption(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newAdoption = {
        name_pet : req.body.name_pet ,  
        age_pet : req.body.age_pet,
        race_pet : req.body.race_pet,
        sex_pet : req.body.sex_pet,
        sterulization_pet :  req.body.sterulization_pet,
        description_pet : req.body.description_pet,
        is_exsolovino : req.body.is_exsolovino
    }
    const updatedAdoption = await Adoption.findByIdAndUpdate(id,newAdoption);
    return res.json({
        message: 'Successfully updated',
        updatedAdoption
    });
}