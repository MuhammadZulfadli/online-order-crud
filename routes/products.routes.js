module.exports = app => {
    const products = require("../controllers/products.js")

    const router = require("express").Router();

    app.use('api/v1/products', router);

    //get all data
    router.get("/", products.findAll);

    //get single data
    router.get("/:id", products.findOne);

    //create a new data
    router.post("/:id", products.create);
    
    //update the data
    router.put("/:id", products.update);

    //delete a data
    router.delete("/:id", products.delete);
}