const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('card', { prompt: `Who is buried in Grant's tomb?`, hint: `Think about whos name is on the tomb!`});
});

module.exports = router;