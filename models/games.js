/**
 * Created by bhad on 11/15/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    film: {
        name: {type: String, required: true},
        lastSubmission: {type: Date, required: true},
        upvotes: {type: Number, required: true},
        downvotes: {type: Number, required: true},
        createdDate: {type: Date, required: true},
        createdBy: {type: String, required: true},
        drinkingGameDescription: {type: String, required: true}
    }
});

//names the model and then sets it to the schema defined above
module.exports = mongoose.model('Game', schema);