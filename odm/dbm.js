
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dearbyevents');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/*
db.once('open', function callback () {
    
    dbeSchema.methods.speak = function () {
        var greeting = this.eventName
            ? "The event: " + this.eventName + 
            "Will be taking place on: "
            : "The event doesn't have a name";
        console.log(greeting);
    };

    var Event = mongoose.model('Event', dbeSchema);
    
    Event.find(function (err, events) {
        if (err) {
            return console.error(err);
        }
        console.log(events);
        return true;
    });
    
    var testEvent = new Event({ 
        eventId:'testEvent', 
        imageUrl: 'testImageUrl',
        eventName: 'testName',
        categories: 'testCategory1, testCategory2, test category 3',
        locationName: 'testLocationName',
        locationLat: 0,
        locationLong: 0,
        dateTimeStart: '2014-12-27 00:00 UTC',
        dateTimeEnd: '2014-12-27 01:00 UTC',
        url: 'http://example.com/testUrl',
        description: 'Test description.',
        ratingPoints: 0,
        ratingCount: 0,
        flagCount: 0,
        subscribers: 0
    });
    //testEvent.speak();


    testEvent.save(function (err, testEvent) {
        if (err) {
            return console.error(err);
        }
        testEvent.speak();
        return true;
    });

    Event.find({ eventName: /^test/ }, callback);

    
});
*/

var dbeSchema = mongoose.Schema({
    eventId: String,
    imageUrl: String,
    eventName: String,
    categories: String,
    locationName: String,
    locationLat: Number,
    locationLong: Number,
    dateTimeStart: String,
    dateTimeEnd: String,
    url: String,
    description: String,
    ratingPoints: Number,
    ratingCount: Number,
    flagCount: Number,
    subscribers: Number
});

module.exports = mongoose.model('Event', dbeSchema);