import { Router } from 'express'
import upload from '../lib-images/multer'

const router = Router();


import {getAlllInformation,deleteInfo,updateInfo,creatInfo } from '../controllers/sobre-nosotros'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .get(getAlllInformation);

router.route('/')
    .post(upload.array('image'),creatInfo);
     
router.route('/:id')
    .put(updateInfo);

router.route('/:id')
    .delete(deleteInfo);


export default router;