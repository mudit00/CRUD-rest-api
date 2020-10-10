const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/crudjs' //database url
const app = express() //starting express

mongoose.connect(url,{useNewUrlParser:true}) //database connection
const con= mongoose.connection

con.on('open',function(){ 
    console.log('Conected..') //Check Database Connection
})

app.use(express.json())  //Want to Use Express with JASON Formate
const rout1Router = require('./routers/rout1.js') //Include the router rout1.js
app.use('/rout1',rout1Router) // Forward the route1 request to the constant rout1Router 
 
app.listen(9000,() => {
    console.log('Server Started') //Check Server Started
})
