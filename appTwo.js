const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I am home page')
})
app.get('/login', (req, res) => {
    res.send('I am login page')
})
app.get("/signup", (req, res) => {
  res.send("I am signup page");
});
app.get("/about", (req, res) => {
  res.send("I am about page");
});
app.get("/contact", (req, res) => {
  res.send("I am contact page");
});
app.get("/career", (req, res) => {
  res.send("I am career page");
});

app.listen(3600)