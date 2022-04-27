import { Schema, model } from 'mongoose'

const AdoptionSchema = new Schema(
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
        sterulization_pet: {
            type: Boolean,
            require: true
        },
        description_pet:{
            type: String,
            required: true
        },
        is_exsolovino:{
            type: Boolean,
            required:true
        }
        

    }, 
    {
    timestamps: true
    });

export default model('Adoption',AdoptionSchema);

