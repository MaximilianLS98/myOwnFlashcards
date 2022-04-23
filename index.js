const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.locals.prompt = "Maximilian";
    res.render('card', { prompt: `Who is buried in Grant's tomb?`, hint: `Think about whose tomb it is`});
});

app.listen(3000, function() {
    console.log('Server is now running on port: 3000 at localhost');
});