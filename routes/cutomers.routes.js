module.exports = app => {
    const cutomers = require("../controllers/cutomers.js")

    const router = require("express").Router();
    
    app.use('api/v1/cutomers', router);
    
    // get all data
    router.get("/", cutomers.findAll);
    
    //create new data
    router.post("/", cutomers.create);
    
    // update the data
    router.put("/:id", cutomers.update);

    // delete the data
    router.delete("/:id", cutomers.delete);

    app.use('/customer', router);
}