const {model} = require("mongoose");

const { OrdersSchema} = require("../schemas/Orders");

const OrdersModel = new model("Order" , OrdersSchema);

module.exports ={OrdersModel};