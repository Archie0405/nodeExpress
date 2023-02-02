const express = require ("express")
const app = express();
app.set("view engine", "ejs")

app.get('/test', (req, res)=>{
    res.send("Welcome here")
});

app.get('/home', (req, res)=>{
    res.render('home')
});

app.get('/contact-us', (req, res)=>{
    res.render('contactUs')
});

app.get('/about-us', (req, res)=>{
    res.render('aboutUs')
});




app.listen(2000);