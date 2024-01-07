const express = require('express');
const path = require('path');

const filePath = path.join(__dirname, 'pages')


const app = express();

// app.use(express.static(filePath))  

// app.get("/", (req, res) => {
//     res.send()
// })

app.get("/", (req, res) => {
    res.sendFile(`${filePath}/index.html`)
})

app.get("/about", (req, res) => {
  res.sendFile(`${filePath}/about.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${filePath}/contact.html`);
});
app.get("/login", (req, res) => {
  res.sendFile(`${filePath}/login.html`);
});

app.get("/signup", (req, res) => {
  res.sendFile(`${filePath}/signup.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${filePath}/404.html`);
});



app.listen(5000)