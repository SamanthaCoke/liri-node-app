let keys = require('./keys.js');
let request = require('request');
let fs = require('fs');
let spotify = require('spotify');
let ombd = require ('omdb');

let command = process.argv[2];
let mediaName = "";
for (let i = 3; i < process.argv.length; i++) {
    mediaName += "+" + process.argv[i];
}

let Twitter = require('twitter');
let client = new Twitter(keys.twitterKeys);
let params = {screen_name: 'SamanthaCoke_'}

function liri (command) {
    switch (command) {
        case "my-tweets":
            grabTweets();
            break;
        case "spotify-this-song":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":    
        default:
            console.log("Samantha, you forgot to add a liri command!")

    }
}

function grabTweets() {
    client.get('statuses/user_timeline',params, function(error, tweets, response) {
        if (!error) {
            let tweetAmount = 0;
            if(tweets.legnth < 20) {
                tweetAmount = tweets.length;
            }
            else {
                tweetAmount = 20;
            }
            for (let i = 0; i < tweetAmount ; i++) {
                console.log(twwets[i].text);
            }
        }
    });
}

function spotifyThis() {
    spotify.search({ type: 'track', query:mediaName || "sce of base - the sign"}, function(err, data) {
 if ( err ) {
     console.log ('Error occurred: ' + err);
     return;
 }

 console.log("Artist: " + data.tracks.items[0].artists[0].name);
 console.log("Name: " + data.tracks.items[0].name);
 console.log("Link: " + data.tracks.items[0].preview_url);
 console.log("Album: " + data.tracks.items[0].album.name);
});

function movieThis() {
    ombd.get ({ title: mediaName }, true, function(err, movie) {
        if (err) {
            return console.error(err);
        }
        if (!movie) {
            return console.log ('Movie not found!');
        }
            console.log("Title: " + movie.title);
            console.log("Year: " + movie.year);
            console.log(IMDB Rating: " + movie.imdb.rating);
            console.log("Produced in: " + movie.counties);
            console.log("Plot: " + movie.plot);
            console.log("Actors: " + movie.actors);

function doThis() {
    fs.readFile("random.txt", "utf8", function(err,data){
        if (err) {
            return;
        }
        let output = data.splot(',');
        command = output[0];
        mediaName = output [1];

        liri(command);
});

}

liri(command);