const express = require('express');
const bodypaParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodypaParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: `Who is buried in Grant's tomb?`, hint: `Think about whos name is on the tomb!`});
});

app.get('/hello', (req, res) => {
    res.render('hello', { userName: req.cookies.userName});
});
app.post('/hello', (req, res) => {
    res.cookie('userName', req.body.userName);
    res.render('hello', {userName:req.body.userName});
});

app.listen(3000, function() {
    console.log('Server is now running on port: 3000 at localhost');
});