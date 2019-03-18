const mongoose = require ('mongoose');
const Product = mongoose.model('Product',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required:true
    },
    imageURL:{
        type: String,
        required:false,
        trim: true
    },
    available:{
        type: Number,
        required: true,
        default: 0
    }
}, "Products");
module.exports= Product;
