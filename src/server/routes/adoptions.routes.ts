import { Router } from 'express'
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
    .post(createAdoption);
    
router.route('/:id')
    .put(updateAdoption);

router.route('/:id')
    .delete(deleteAdoption);


export default router;