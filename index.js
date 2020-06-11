const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = 4000;

app.use(bodyParser.json())
app.use('/user', routes)


mongoose.connect('mongodb://mongo:27017/user', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open',  () => {
    console.log('db connection established')
})

app.listen(PORT,  () => {
    console.log('server is running on', PORT)
})