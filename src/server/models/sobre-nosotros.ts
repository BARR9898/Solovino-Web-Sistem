import { Schema, model } from 'mongoose'

const SobreNosotrosSchema = new Schema(
    {
        vision:{
            type: String,
            required: true
        },
        mision:{
            type: String,
            required: true
        },
        equipo:{
            type: Array,
            required:true
        }
        
        
    });

export default model('SobreNosotros',SobreNosotrosSchema);

