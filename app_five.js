const express = require('express');
const app = express();

const path = require('path');

app.get("/", (req, res) => {
    res.send("I AM HOMEPAGE")
})
app.get("/users", (req, res) => {
  res.send("I AM USERSPAGE");
});

const requestFileter = (req, res,next) => {
    console.log("Request Filter")
    if(!req.query.age){
        res.send("Please Provide Age")
    }else if(req.query.age<=18){
        res.send("You can't access this page")
    }
    next()
}

app.use(requestFileter)

app.listen(5000)