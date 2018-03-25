const customerModel = require('../models').customer;


module.exports = {
    postAdd: (req, res) => {

        customerModel.build({
            id: req.body.id,
            n_id: req.body.n_id,
            name: req.body.name,
            email: req.body.email,
            createdAt: new Date(),
            updatedAt: new Date()
        }).save().then(cust => console.log(cust).catch(error => console.log(error)));

        res.send([req.body.name, req.body.email]);

    },

    put: (req, res) => {

        customerModel.update({
            name: req.body.name,
            n_id: req.body.n_id
        }, {
            where:{
                id: req.params.Cid,
            }
        });

    },

    delete: (req, res) => {
        customerModel.destroy({
        where: {
            id: req.params.Cid,
        }
    });
    },

    get: (req, res) =>{
        customerModel.findAll().then(function(result){
            const customers = result.map((customerValue) => {
                return customerValue.dataValues;
            });
            res.send(customers);
        });

    },
    postLog: (req, res) => {
        customerModel.findAll({
            where: {
                email: req.body.email,
                n_id: req.body.n_id
            },
        }).then((result) => {
            if(result){
                console.log(result[0].dataValues.id);
                res.send("Welcome!");
            }else{
                res.send('Error, please try again');
            }

        })
    }

};