import { Router } from 'express'
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
    .post(createPost);
    
router.route('/:id')
    .put(updatedPost);

router.route('/:id')
    .delete(deletePost);


export default router;