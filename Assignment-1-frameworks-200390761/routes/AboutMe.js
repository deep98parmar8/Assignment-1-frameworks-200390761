'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('AboutMe', { title: 'AboutMe' });
});

module.exports = router;