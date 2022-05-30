import { Schema, model } from 'mongoose'

const AdoptionSchema = new Schema(
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
        sterulization_pet: {
            type: Boolean,
            
        },
        description_pet:{
            type: String,
            
        },
        is_exsolovino:{
            type: Boolean,
           
        },
        image:{
            title: String,
            imagePath: String,
        }
    }, 
    {
    timestamps: true
    });

export default model('Adoption',AdoptionSchema);

