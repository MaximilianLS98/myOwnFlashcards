const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    //console.log('Hello');
    next();
});

router.use((req, res, next) => {
    //console.log('World');
    next();
});


router.get('/', (req, res) => {
    const userName = req.cookies.userName;
    if (userName) {
        res.render('index', { userName: userName});
    } else {
        res.render('hello');
    }
});

router.get('/hello', (req, res) => {
    const userName = req.cookies.userName;
    if (userName) {
        res.render('index', { userName: userName});
    } else {
        res.render('hello');
    }
});
router.post('/hello', (req, res) => {
    res.cookie('userName', req.body.userName);
    res.redirect('/');
    //console.log(`Hello ${req.body.userName}`);
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('userName');
    res.redirect('/hello');
    console.log('Cookies reset');
});

module.exports = router;