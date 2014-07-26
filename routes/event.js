
/*
 * GET events listing.
 */

var fs = require('fs'),
    csvParse = require('csv-parse'),
    input,
    output;

var parser = csvParse({delimiter: ','}, function(err, data){
    output = data;
});

fs.createReadStream('data/verybasicdataset.csv').pipe(parser);

exports.list = function(req, res){
  res.json(output);
};