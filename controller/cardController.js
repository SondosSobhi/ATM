const cardModel = require('../models').card;
const customerModel = require('../models').customer;
const accountModel = require('../models').account;

module.exports = {
    post: (req, res) => {
        cardModel.build({
            id: req.body.id,
            number: req.body.number,
            createdAt: new Date(),
            updatedAt: new Date(),
            cust_id: req.body.custId
        }).save();

        res.send(req.body);
    },
    put: (req, res) => {
        cardModel.update({
            number: req.body.number
        }, {
            where: {
                id: req.params.cardId
            }
        });
    },
    delete: (req, res) => {
        cardModel.destroy({
            where: {
                id: req.params.cardId
            }
        });
    },
    get: (req, res) => {
        cardModel.findAll({
            include: [{
                model: customerModel,
                required: true,
                where: {
                    id: req.params.custId
                }
            }]
        }).then((result) => {
            res.send(result);
        })
    }
};