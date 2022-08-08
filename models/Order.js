const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const orderSchema = new mongoose.Schema(
  {
    userId: { 
      type: ObjectId, 
      ref: 'User'
    },
    
    products: [],

    Delivery_Puckup: {
      type: String,
      required: true
    },
    
    totalPrice: {
      type: Number
    },
    status: {
      type: String,
      default: 'null'
    },
    // bayWith: {
    //   type: String
    // }
    payWith: {
      // COD - CC
      type: String
    },
    usedPromoCode: {
        type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
