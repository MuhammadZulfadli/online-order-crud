module.exports = app => {
    const drivers = require ("../controllers/drivers.js")

    const router = require("express").Router();

    
    app.use('/api/v1/drivers/', router);
    
    router.get("/", drivers.findAll);

    router.get("/:id", drivers.findOne);

    router.post("/:id", drivers.create);

    router.put("/:id", drivers.update);

    router.delete("/:id", drivers.delete);

}