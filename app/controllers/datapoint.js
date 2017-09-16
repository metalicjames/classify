var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    // TODO: list all
});

router.get('/:datapoint_id', function(req, res) {
    // TODO: get one datapoint
});

router.put('/:datapoint_id', function(req, res) {
    // TODO: update datapoint
});

module.exports = router;