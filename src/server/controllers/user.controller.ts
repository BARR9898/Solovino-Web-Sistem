import {  Request, Response } from 'express'

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../models/User");
export async function getUsers(req:Request, res:Response) {
    const { email } = req.query;
    const { password } = req.query;
    if (email != undefined && password != undefined) {
        const query = {
            email: email,
            password: password
        };
        await Users_1.default.findOne(query)
            .then((user:any) => {
                res.json(user);
            })
            .catch((err:any) => {
                return res.json({ message: 'Error deleting user by Id and password' });
            });
    } else {
        await Users_1.default.find()
            .then((users:any) => {
                res.json(users);
            })
            .catch((err:any) => {
                return res.json({ message: 'Error getting all users' });
            });
    }
    return res;
}

export async function getUser(req:Request, res:Response) {
    const { id } = req.params;
    await Users_1.default.findById(id)
        .then((user:any) => {
            res.json(user);
        })
        .catch((err:any) => {
            return res.json({ message: 'Error getting user' });
        });
    return res;
}

export async function createUser(req:Request, res:Response) {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    const newUser = {
        username: username,
        email: email,
        password: password,
        role: role
    };
    //console.log(newUser);
    const user = new Users_1.default(newUser);
    await user.save()
        .then((user:any) => {
            res.json(user);
        })
        .catch((err:any) => {
            return res.json({ message: 'Error creating user' });
        });
    return res;
}

export async function deleteUser(req:Request, res:Response) {
    const { id } = req.params;
    await Users_1.default.findByIdAndRemove(id)
        .then((user:any) => {
            res.json(user);
        })
        .catch((err:any) => {
            return res.json({ message: 'Error deleting user' });
        });
    return res;
}

export async function updateUser(req:Request, res:Response) {
    const { id } = req.params;
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    try {
        console.log(id);
        
        const updatedUser = await Users_1.default.findByIdAndUpdate(id, {
            username,
            email,
            password,
            role
        }, { new: true });
        return res.json(updatedUser);
    } catch (err:any) {
        console.log(err);
        
        return res.json({ message: 'Error updating user' });
    }
}
