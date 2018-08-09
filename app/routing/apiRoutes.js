var friends = require("../data/friends"),
    express = require("express"),
    bodyParser = require("body-parser");

// Set up express
var app = express();

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
var allFriends = (request, response) => {
  response.json(friends.data);
};

var postFriends = (request, response) => {
  friends.data.push(request.body);
  // console.log(friends.data);
  var newUser = friends.data[friends.data.length - 1];
  var bestFriend = {};
  var bestFriendDifference = 1000;
  var difference = 0;

  // console.log(difference);
  // console.log(bestFriendDifference);
    
  for (let i = 0; i < friends.data.length - 1; i++) {
    difference = 0;
    for (let j = 0; j < 10; j++) {
      difference += Math.abs(parseInt(newUser.scores[j]) - parseInt(friends.data[i].scores[j]));
    };
    // console.log(`Difference for ${friends.data[i].name} is ${difference}`);
    
    
    if (difference < bestFriendDifference) {
      bestFriendDifference = difference;
      bestFriend = friends.data[i];
    };
    
  };
  // console.log("------- New user ------");
  // console.log(newUser);
  // console.log("\n------ Best friend -----");
  // console.log(bestFriend);
  // console.log("-------------");
  
  // console.log(difference);
  // console.log(bestFriendDifference);

  response.json(bestFriend);
};

module.exports.apiRoutes = {
  allFriends: allFriends,
  postFriends: postFriends
}