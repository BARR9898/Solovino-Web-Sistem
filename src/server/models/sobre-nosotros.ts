import { Schema, model } from 'mongoose'

const SobreNosotrosSchema = new Schema(
    {
        vision:{
            type: String,
            
        },
        mision:{
            type: String,
            
        },
        equipo:{
            type: Array,
            
        }
        
        
    });

export default model('SobreNosotros',SobreNosotrosSchema);

