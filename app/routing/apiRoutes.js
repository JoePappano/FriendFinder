var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    })

};