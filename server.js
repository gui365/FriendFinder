var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up server to listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static('app/public'));


// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Routing
// app.get("/", (request, response) => {
//   // app.sendFile(express.static("public"));
//   response.sendFile(path.join(__dirname, "app/public/home.html"));
//   console.log(__dirname);
// });

// app.get("/survey", (request, response) => {
//   response.sendFile(path.join(__dirname, "app/public/survey.html"));
// });