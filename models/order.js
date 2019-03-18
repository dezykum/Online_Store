const mongoose = require ('mongoose');
let schema = mongoose.Schema;
const Product = require("../models/product");

//const Order = mongoose.model("Order",{
   // products:{
       const activitySchema = new schema({
        name: String,
        price: Number,
        quantity: Number
       })
    const Order = mongoose.model("Order",activitySchema,"Orders");
module.exports = Order;
