import { Router } from 'express'
import upload from '../lib-images/multer'
const router = Router();


import {getAlllPosts,getPost,createPost,deletePost,updatedPost } from '../controllers/posts.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .get(getAlllPosts);

router.route('/:id')
    .get(getPost);

router.route('/')
    .post(upload.single('image'),createPost);
    
router.route('/:id')
    .put(upload.single('image'),updatedPost);

router.route('/:id')
    .delete(deletePost);


export default router;