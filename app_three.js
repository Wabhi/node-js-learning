const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("I am home page")
})

app.get("/login",function(req, res){
    res.send(`<><h1>I am login page</h1><a href="/">GO TO HOME PAGE - ${res.query.name}</a></>`);
})

app.get("/help",function(req, res){
    res.send({
        name:"Abhishek Tiwari",
        email:"abhishek@gmail.com",
    })
})

app.listen(5000)