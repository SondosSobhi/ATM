const express = require('express');
const accountRouter = express.Router();
const accountController = require('../controller/accountController');

const routes = function(){

    accountRouter.route('/create')
        .post(accountController.post);

    accountRouter.route('/edit/:accId')
        .put(accountController.put);

    accountRouter.route('/delete/:accId')
        .delete(accountController.delete);

    accountRouter.route('/customer/:CustNid')
        .get(accountController.get);

    return accountRouter;
};

module.exports = routes();