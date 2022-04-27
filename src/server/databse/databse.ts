import error from 'express';
import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/solovino', {
        });
        console.log('>>> Database connected');
    }
    catch(error) {
        console.log(error);
    }
}
