import { Router } from 'express'
const router = Router();


import {getAlllInformation,deleteInfo,updateInfo,creatInfo } from '../controllers/sobre-nosotros'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .get(getAlllInformation);

router.route('/')
    .post(creatInfo);
    
router.route('/:id')
    .put(updateInfo);

router.route('/:id')
    .delete(deleteInfo);


export default router;