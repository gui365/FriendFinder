// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
var path = require("path");

// Routing
var home = (request, response) => {
  // app.sendFile(express.static("public"));
  response.sendFile(path.join(__dirname, "../public/home.html"));
};

var survey = (request, response) => {
  // app.sendFile(express.static("public"));
  response.sendFile(path.join(__dirname, "../public/survey.html"));
};

module.exports.htmlRoutes = {
  home: home,
  survey: survey
}