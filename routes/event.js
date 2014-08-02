
/*
 * GET events listing.
 */

/*
var fs = require('fs'),
    csvParse = require('csv-parse'),
    input,
    output;

var parser = csvParse({delimiter: ',',columns: true}, function(err, data){
    output = data;
});

fs.createReadStream('data/verybasicdataset.csv').pipe(parser);
*/
var dbm = require('../odm/dbm.js');
exports.list = function(req, res){
    //console.log(req.params);
    if (
        (typeof req.params.location != "undefined")
        && (typeof req.params.distance != "undefined")
        ){

        dbm.find(
            { 
                locationGeometry: { 
                    $geoWithin: { 
                        $centerSphere: [
                            req.params.location.split(',') ,
                            parseFloat(req.params.distance) / 6371 
                        ] 
                    } 
                } 
            },
            function (err, events) {
                if (err) {
                    return console.error(err);
                }
                return res.json(events);
            }
        );
    } else {
        dbm.find(
            function (err, events) {
                if (err) {
                  return console.error(err);
                }
                return res.json(events);
            }
        );
    }
};