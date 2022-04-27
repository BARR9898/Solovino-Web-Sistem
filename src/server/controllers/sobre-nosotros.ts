import {  Request, Response } from 'express'


// Models
import SobreNosotros from '../models/sobre-nosotros';


//GET ALL INFORMATION
export async function getAlllInformation(req: Request, res: Response): Promise<Response> {
    const info = await SobreNosotros.find();
    return res.json(info);
};



//Create info
export async function creatInfo(req: Request, res: Response): Promise<Response> {
    const newInfo = new SobreNosotros({
        vision: req.body.vision,
        mision: req.body.mision,
        equipo: req.body.equipo

    });
    await newInfo.save();
    return res.json({
        message: 'Info saved succsefully',
        newInfo
    });
};



//Delete info
export async function deleteInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await SobreNosotros.findByIdAndRemove(id);
    return res.json({ message: 'Info deleted' });
};

//Update info
export async function updateInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newInfo = new SobreNosotros({
        vision: req.body.vision,
        mision: req.body.mision,
        equipo: req.body.equipo
    });
    const updatedInfo = await SobreNosotros.findByIdAndUpdate(id,newInfo);
    return res.json({
        message: 'Successfully updated',
        updateInfo
    });
}