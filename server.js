var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    htmlRoutes = require("./app/routing/htmlRoutes"),
    apiRoutes = require("./app/routing/apiRoutes");

    // Set up express
var app = express();
var PORT = process.env.PORT || 3000;
// Set up server to listen on port

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Routing
app.use(express.static(path.join(__dirname, "/app/public")));
app.get("/", htmlRoutes.htmlRoutes.home);
app.get("/survey", htmlRoutes.htmlRoutes.survey);
app.get("/api/friends", apiRoutes.apiRoutes.allFriends);
app.post("/api/friends", apiRoutes.apiRoutes.postFriends);