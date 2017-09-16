var express = require('express');
var router = express.Router();

var datapoint = require('./datapoint');

router.use('/datapoint', datapoint);

module.exports = router;
