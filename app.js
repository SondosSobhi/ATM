const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

const port = 3000;
app.listen(port, function () {
    console.log('running! on PORT' + port);
});


const Customer = require('./Routes/customer');
app.use('/customer', Customer);
const Account = require('./Routes/account');
app.use('/account', Account);
const Card = require('./Routes/card');
app.use('/card', Card);

app.get('/', function(req, res){
    res.send('bla');
});
