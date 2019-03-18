const express = require ('express');
const asyncWrapper = require ("../utilities/async-wrapper").AsyncWrapper;
const router = express.Router();
const Order = require("../models/order");
const Product = require("../models/product");
const ObjectId=require("mongoose");
const databaseName = 'Shopping';
// router.get("/:email",asyncWrapper(async (req, res)=>{
//  let orders = await Order.find({
//      "customer.email": req.params.email
//  });
//  res.send(orders);
// }));
router.get("/orderdetails",asyncWrapper(async (req, res)=>{
    res.send(await Order.find({}));
     }));
router.post("/:id",asyncWrapper(async (req, res)=>{
    Product.findOne({_id: ObjectId}, function() {
        let order = new Order(req.body);
         order.save()
        .then(item => {
                res.send("Order has placed successfully.");
                })
                .catch(err => {
                res.status(400).send("unable to save to database");
                });
         Order.findOne({_id: ObjectId}, function(err, document) {
           console.log(req.body.name);
           var idHex = req.params.id;
           console.log(idHex)

      });
    // let order = new Order(req.body);
    // await order.save()
    // .then(item => {
    //     res.send("Order has placed successfully.");
    //     })
    //     .catch(err => {
    //     res.status(400).send("unable to save to database");
    //     });
    //     Order.findOne({_id: ObjectId}, function(err, document) {
    //         console.log(req.body.name);
    //         var idHex = req.params.id;
    //         console.log(idHex)

        });
     }));
router.delete("/:id",asyncWrapper(async (req, res)=>{
    let deleted = await Order.findOneAndDelete({_id: req.params.id});
    res.status(200).send(deleted);
    }));
    module.exports= router;

