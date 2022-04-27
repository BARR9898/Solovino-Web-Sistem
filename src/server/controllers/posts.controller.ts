import {  Request, Response } from 'express'


// Models
import Post from '../models/posts';


//GET ALL POSTS
export async function getAlllPosts(req: Request, res: Response): Promise<Response> {
    const posts = await Post.find();
    return res.json(posts);
};



//Create Post
export async function createPost(req: Request, res: Response): Promise<Response> {
    const newPost = new Post({
        name_pet : req.body.name_pet ,  
        age_pet : req.body.age_pet,
        race_pet : req.body.race_pet,
        sex_pet : req.body.sex_pet,
        description_pet :  req.body.description_pet,
        place_disapparence : req.body.place_disapparence,
        date_disapparence : req.body.date_disapparence
    });
    await newPost.save();
    return res.json({
        message: 'Adoption Saved Successfully',
        newPost
    });
};

//Get post
export async function getPost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
}

//Delete post
export async function deletePost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    return res.json({ message: 'Adoption Deleted' });
};

//Update post
export async function updatedPost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newPost = {
        name_pet : req.body.name_pet ,  
        age_pet : req.body.age_pet,
        race_pet : req.body.race_pet,
        sex_pet : req.body.sex_pet,
        description_pet :  req.body.description_pet,
        place_disapparence : req.body.place_disapparence,
        date_disapparence : req.body.date_disapparence
    };
    const updatedPost = await Post.findByIdAndUpdate(id,newPost);
    return res.json({
        message: 'Successfully updated',
        updatedPost
    });
}