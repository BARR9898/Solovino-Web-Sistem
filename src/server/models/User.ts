import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    username: String,
    email: String,
    password:String,
    role: String
}); 

interface IUser extends Document {
    username: string;
    email: string;
    password:string
    role: String
}

export default model<IUser>('User', schema);
