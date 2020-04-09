module.exports = app => {

    const order_items = require("../controllers/order_items.js")

    const router = require("express").Router();

    app.use('api/v1/order_items', router);

    //get all data
    router.get("/", order_items.findAll);

    //get single data
    router.get("/:id", order_items.findOne);

    //create a new data
    router.post("/:id", order_items.create);

    //update the data
    router.put("/:id", order_items.update);

    //delete a data
    router.delete("/:id", order_items.delete);

}