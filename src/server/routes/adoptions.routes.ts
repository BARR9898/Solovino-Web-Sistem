import { Router } from 'express'
import upload from '../lib-images/multer'
const router = Router();


import {getAdoption,getAlllAdoptions,createAdoption,deleteAdoption,updateAdoption } from '../controllers/adoptions.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .get(getAlllAdoptions);

router.route('/:id')
    .get(getAdoption);

router.route('/')
    .post(upload.single('image'),createAdoption);
    
router.route('/:id')
    .put(upload.single('image'),updateAdoption);

router.route('/:id')
    .delete(deleteAdoption);


export default router;