const mongoose= require ('mongoose');
require("dotenv").config();

console.log(process.env.mongo_url);

mongoose.connect(process.env.mongo_url);

const connection= mongoose.connection;

connection.on('error', ()=>{
    console.log('Error Connetion');

});

connection.on('connected', ()=>{
    console.log('Connected Successfully');

});

module.exports = connection;