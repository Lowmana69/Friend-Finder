var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestCompatability = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      for (var j = 0; j < friends[1].length; j++) {
        totalDifference += Math.abs(
          parseInt(userScores[j] - parseInt(friends[i].scores[j]))
        );
        if (totalDifference <= bestCompatability.friendDifference) {
          bestCompatability.name = friends[i].name;
          bestCompatability.photo = friends[i].photo;
          bestCompatability.friendDifference = totalDifference;
        }
      }
    }
    friends.push(userData);

    res, json(bestCompatability);
  });
};
