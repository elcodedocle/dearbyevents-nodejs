
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
var kk = require('../odm/dbm.js');
exports.list = function(req, res){
    console.log(kk);
    kk.find(
        function (err, events) {
            if (err) {
              return console.error(err);
            }
            return res.json(events);
        }
    );
};