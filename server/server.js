const express = require('express');
const app = express();
const passport = require('passport');
const passportSetup = require('./passport');
const path = require("path");

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../client/build")));
const server = app.listen(5000, function(){
    console.log('App listening on port 5000')
});

app.get('/auth', passport.authenticate('github'));

app.get("/auth/github", passport.authenticate('github'), (req, res) => {
    console.log("token",req.query.code)
    const authCode = req.query.code;
    res.redirect(`http://localhost:5000/`);
});

app.get('/profile', (req,res) => {
    return res.json({profile: passportSetup()._json})
})