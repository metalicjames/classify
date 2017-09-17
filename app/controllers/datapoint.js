var express = require('express');
var router = express.Router();

var Datapoint = require('../models/datapoint');

router.get('/', function(req, res) {
    Datapoint.find({}, function(err, datapoints) {
        if(err) {
           return res.json({success: false,
                            message: err});
        }

        return res.json({success: true,
                         datapoints: datapoints});
    });
});

router.get('/next_no_label', function(req, res) {
   Datapoint.findOne({labelled: false}, function(err, datapoint) {
       if(err || !datapoint) {
            return res.json({success: false,
                             message: err});
       }
       return res.json({success: true,
                       datapoint: datapoint}); 
   });
});

router.get('/labelled', function(req, res) {
    Datapoint.find({labelled: true}, function(err, datapoints) {
        if(err) {
           return res.json({success: false,
                            message: err});
        }

        return res.json({success: true,
                         datapoints: datapoints});
    });
});

router.get('/:datapoint_id', function(req, res) {
    Datapoint.findById(req.params.datapoint_id, function(err, datapoint) {
        if(err) {
            return res.json({success: false,
                             message: err});
        }
        
        return res.json({success: true,
                         datapoint: datapoint});
    });
});

router.put('/:datapoint_id', function(req, res) {
    req.checkBody('label', 'Label is required')
                                    .notEmpty();

    req.getValidationResult().then(function(errors) {
        if(!errors.isEmpty()) {
            var errs = [];
            for(var i in errors.array()) {
                errs.push(errors.array()[i]["msg"]);
            }
            return res.json({success: false,
                             message: errs.join('/n')
                            });
        }
 
        Datapoint.findById(req.params.datapoint_id, function(err, datapoint) {
            if(err) {
                return res.json({success: false,
                                 message: err});
            }
            
            datapoint.label = req.body.label;
            datapoint.labelled = true;
            
            datapoint.save(function(err) {
                if(err) {
                    return res.json({success: false,
                                     message: err});
                }
                
                return res.json({success: true});
            });
        });
    });
});

module.exports = router;