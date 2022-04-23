const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<h1>i Love Treehouse</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(3000, function() {
    console.log('Server is now running on port: 3000 at localhost')
});