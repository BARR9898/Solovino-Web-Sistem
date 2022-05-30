import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
    {
        name_pet : {
            type: String,
            
        },        
        age_pet : {
            type: String,
            
        },
        race_pet : {
            type: String,
            
        },
        sex_pet : {
            type: String,
            
        },
        description_pet:{
            type: String,
            
        },
        place_disapparence:{
            type: String,
            
        },
        date_disapparence:{
            type: Date,
            
        },
        image:{
            title: String,
            imagePath: String
        }
        

    }, 
    {
    timestamps: true
    });

export default model('Post',PostSchema);

