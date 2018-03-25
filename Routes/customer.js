const express = require('express');
const customerController = require('../controller/customerController');
const customerRouter = express.Router();

const routes = function(){

    customerRouter.route('/create')
        .post(customerController.postAdd);

    customerRouter.route('/edit/:Cid')
        .put(customerController.put);

    customerRouter.route('/delete/:Cid')
        .delete(customerController.delete);

    customerRouter.route('/list')
        .get(customerController.get);

    customerRouter.route('/login')
        .post(customerController.postLog);

    return customerRouter;
};

module.exports = routes();