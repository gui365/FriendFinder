// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Routing
app.get("/", (request, response) => {
  // app.sendFile(express.static("public"));
  response.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", (request, response) => {
  response.sendFile(path.join(__dirname, "app/public/survey.html"));
});