const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require('');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) =>{

});
app.listen(3000, () =>{
    console.log('server started');
})
module.exports = app;