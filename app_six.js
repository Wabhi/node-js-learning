const express = require('express')
const path = require('path')
const app = express()


const filePath = path.join(__dirname, 'pages')
//const filePath1 = path.join(__dirname, "view");
app.get("/", (req, res) => {
  res.sendFile(`${filePath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${filePath}/about.html`);
});

app.get("/contact", (req, res) => {
  res.sendFile(`${filePath}/contact.html`);
});
app.get("/login", (req, res) => {
  res.sendFile(`${filePath}/login.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${filePath}/404.html`);
});

app.set("view engine","ejs")

app.get("/profile", (req, res) => {
//   res.sendFile(`${filePath}/404.html`);
const user ={
    name:"Abhishek Tiwari",
    email:"abhishek@gmail.com",
    address:"HSR Layout",
    phone:"123-333-485",
    Role: "SDE-1",
    skills:['html','css','javascript','react','nextjs','ga','gtm','redux','mui','styled component','nodejs']
}
  app.render('profile',{user});
});
app.get("/profile", (req, res) => {
//   res.sendFile(`${filePath}/404.html`);
const user ={
    name:"Abhishek Tiwari",
    email:"abhishek@gmail.com",
    address:"HSR Layout",
    phone:"123-333-485",
    Role: "SDE-1",
    skills:['html','css','javascript','react','nextjs','ga','gtm','redux','mui','styled component','nodejs']
}
  app.render('profile',{user});
});

app.get("/sign-in", (req, res) => {
    app.render('sign-in')
})

app.listen(5000)