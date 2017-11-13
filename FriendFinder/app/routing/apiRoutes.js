var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        //  ininiate best here to avoid scope. we will send this back to the View based on what they send
        var best = {};
        //  Biggest difference from newUser and existing user can be 40 so we start there
        var greatestdiff = 40;
        var bestDiff;
        //  loop over all friends and their scores
        for (var i = 0; i < friends.length; i++) {
            //  grab and add diff from all scores from user and reset every loop
            var diff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - newUser.scores[j]);
            }
            if (diff < greatestdiff) {
                bestDiff = diff;
                best = {};
                best = friends[i];
            }
        }
        friends.push(newUser);
        res.json(best);
    })

};






