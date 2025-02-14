import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required:true,
    },
    price: {
      type: Number,
      default:0
    },
    brand: {
      type: String,
      default:0
    },
    model: {
      type: String,
      default:0
    },
    productId:{
      type: String,
      default:0
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category",
      required: true
    },
    categoryName:{
      type:String,
      required:true
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
