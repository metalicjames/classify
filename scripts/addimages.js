const fs = require('fs');
const mongoose = require('mongoose');

const Datapoint = require('../app/models/datapoint');

const dir = './public/data';
const config = require('../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useMongoClient: true}); 

fs.readdir(dir, function(err, files) {
    if(err) {
        throw err;
    }
    
    files.forEach(function(file) {
        //console.log(file);
        fs.stat(dir + '/' + file, function(err, stats) {
            //console.log(stats);
            if(!stats.isDirectory()) {
                var filename = file.split('.').slice(0, -1).join('.');
                
                var info = filename.split('_');
                
                Datapoint.findOne({latitude: Number(info[0]), 
                                   longitude: Number(info[1])}, 
                                   function(err, datapoint) {
                    if(err) {
                        throw err;
                    }
                    
                    if(!datapoint) {
                        var dp = new Datapoint();
                        
                        dp.filename = file;
                        dp.latitude = Number(info[0]);
                        dp.longitude = Number(info[1]);
                        
                        dp.save(function(err) {
                            if(err) {
                                throw err;
                            }
                            
                            console.log('Added ' + file + ' to db');
                        });
                    }
                });
            }
        });
    });
});

process.exit();