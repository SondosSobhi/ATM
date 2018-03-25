const accountModel = require('../models').account;
const customerModel = require('../models').customer;

module.exports = {
    post: (req, res) => {
        accountModel.build({
            id: req.body.id,
            value: req.body.value,
            createdAt: new Date(),
            updatedAt: new Date(),
            cust_id: req.body.CustomerId
        }).save();

        res.send(req.body);
    },

    put: (req, res) => {
        accountModel.update({
            value: req.body.value
        }, {
            where: {
                id: req.params.accId
            }
        });
    },
    delete: (req, res) => {
        accountModel.destroy({
            where: {
                id: req.params.accId
            }
        });
    },
    get: (req, res) => {
        accountModel.findAll({
            include: [{
                model: customerModel,
                required: true,
                where: {
                    n_id: req.params.CustNid
                }
            }]
        }).then((result) => {
            res.send(result);
        });
    }
};