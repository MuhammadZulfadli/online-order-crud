const { cutomers } = require('../models');

//create a new data
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message:"Data tidak boleh kosong"
        });
        return;
    }



//create a data
const cutomers = {
    fullname: req.body.data.attributes.fullname,
    username: req.body.data.attributes.username,
    email: req.body.data.attributes.email,
    phone_number: req.data.attributes.phone_number
};

//save data into the database
cutomers.create(cutomers)
    .then(data => {
        res.send({
            message: "success retrieve data",
            status: true,
            data: data 
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        })
    })

}

//get all data
exports.findAll = (req, res) => {
    cutomers.findAll({
        attributes: {
            exclude:['createdAt','updatedAt']
        }
    })

    .then(data => {
        res.send({
            message: "success retrieve data",
            status:true,
            data: data
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        })
    })
}

//get single data
exports.findOne = (req, res) => {
    const id = req.params.id;

    cutomers.findByPk(id, {
        attributes: {
            exclude: ['createdAt','updatedAt']
        }
    })
    .then(data => {
        res.send({
            message: "success retrieve data",
            status: true,
            data: data
        })
    })
    .catch(err => {
        res.status(500).send({
            message: "Error with id=" + id
        })
    })
}


//update a data
exports.update = (req, res) => {
    const id = req.params.id;
    cutomers.update(req.body.data.attributes, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Update was succesfully"
            });
        } else {
            res.send({
                message: `cannot update the data with id = ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:"error update with id=" + id
        })
    })
}

//delete the data
exports.delete = (req, res) => {
    const id = req.params.id;

    cutomers.destroy({
        where: {id: id}
    })
        .then(num => {
            if(num ==1) {
                res.send({
                    message: "customer was deleted Succesfully" 
                })
            } else {
                res.send({
                    message: `cannot delete data with id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "cannot delete the data with id=" + id
            })
        })
}