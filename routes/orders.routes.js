module.exports = app => {
    const orders =  require("../controllers/orders.js")

    const router = require ("express").Router();

    app.use('api/v1/orders/', router);
    
    //get all the data
    router.get("/", orders.findAll);

    //get single data
    router.get("/:id", orders.findOne);

    //create new data
    router.post("/:id", orders.create);

    //updata the data
    router.put("/:id", orders.update);

    //delete the data
    router.delete("/:id", orders.delete);

}