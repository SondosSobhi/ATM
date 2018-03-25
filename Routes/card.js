const express = require('express');
const cardController = require('../controller/cardController');
const cardRoute = express.Router();

const routes = function () {

    cardRoute.route('/create')
        .post(cardController.post);

    cardRoute.route('/edit/:cardId')
        .put(cardController.put);

    cardRoute.route('/delete/:cardId')
        .delete(cardController.delete);

    cardRoute.route('/customer/:custId')
        .get(cardController.get);
    return cardRoute;
};

module.exports = routes();