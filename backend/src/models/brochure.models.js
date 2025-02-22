import { model, Schema } from "mongoose";

const brochureSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        document:{
            type:String,
            required:true
        },
    }, { timestamps: true }
)

export const Brochure = model('Brochure',brochureSchema);