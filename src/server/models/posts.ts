import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
    {
        name_pet : {
            type: String,
            require: true
        },        
        age_pet : {
            type: String,
            require: true
        },
        race_pet : {
            type: String,
            require: true
        },
        sex_pet : {
            type: String,
            require: true
        },
        description_pet:{
            type: String,
            required: true
        },
        place_disapparence:{
            type: String,
            required: true
        },
        date_disapparence:{
            type: Date,
            required: true
        }
        

    }, 
    {
    timestamps: true
    });

export default model('Post',PostSchema);

