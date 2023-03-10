const express = require("express");
const path = require("path");

const app = express();

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// A mock route to return some data.
app.get("/api/movies", (request, response) => {
  console.log("❇️ Received GET request to /api/movies");
  let movies = [];
  const fs = require('fs');
  try {
    const jsonString = fs.readFileSync(require('path').resolve(__dirname, './movies_metadata.json'));
    movies = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }

  response.json({ data: movies });
});

// A mock route to return some data.
app.get("/api/movies/:movieId", (request, response) => {
  console.log("❇️ Received GET request to /api/movies/:movieId");
  let movies = [];
  let movie = null;
  const fs = require('fs');
  try {
    const jsonString = fs.readFileSync(require('path').resolve(__dirname, './movies_metadata.json'));
    movies = JSON.parse(jsonString);
    movie = movies.filter(x => x.id == request.params.movieId)
    if (movie.length) {
      movie = movie[0]
    }
  } catch (err) {
    console.log(err);
    return;
  }

  response.json({ data: movie });
});

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
