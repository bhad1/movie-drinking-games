/**
 * Created by bhad on 11/15/2017.
 */
var Game = require('../models/games');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/gamesdata');

var games = [
    new Game({
    film: {
        name: "The Bachelorette",
        lastSubmission: "10/3/2016",
        numberOfSubmission: "854",
        upvotes: "407",
        downvotes: "237",
        createdDate: "3/10/2016",
        createdBy: "myName",
        drinkingGameDescription: "Take a shot every time the person you think is going to win gets one on one time with the bachelor or gets a date with them. Shotgun every time your least favorite person gets one on one time with them. If the person you think is going to win gets too drunk take a shot."
    }}),
    new Game({
        film: {
            name: "Bachelor",
            lastSubmission: "3/3/2015",
            numberOfSubmission: "494",
            upvotes: "162",
            downvotes: "209",
            createdDate: "8/4/2017",
            createdBy: "dsaf",
            drinkingGameDescription: "Take a shot every time the person you think is going to win gets one on one time with the bachelor or gets a date with them. Shotgun every time your least favorite person gets one on one time with them."
        }}),
    new Game({
        film: {
            name: "Game of Thrones",
            lastSubmission: "12/19/2014",
            numberOfSubmission: "496",
            upvotes: "290",
            downvotes: "945",
            createdDate: "12/30/2014",
            createdBy: "coolGuy",
            drinkingGameDescription: "Drink every time Hodor speaks."
        }}),
    new Game({
        film: {
            name: "Saving Silverman",
            lastSubmission: "10/3/2016",
            numberOfSubmission: "854",
            upvotes: "407",
            downvotes: "237",
            createdDate: "3/10/2016",
            createdBy: "myName",
            drinkingGameDescription: "Drink every time Sandy speaks to the girl all the characters hate."
        }})
];

// this saves all of the individual games to the database with mongoose\
// we must set the done variable because if we put the mongoose.disconnect after the for loop it would hit it before it was complete because saving to the database is asynchronous
var done = 0;
for (var i = 0; i < games.length; i++){
    games[i].save(function(err, result ){
        done++;
        if(done === games.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}