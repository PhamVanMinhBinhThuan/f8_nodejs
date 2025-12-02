const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
// app.use(morgan("combined"));

// Template Engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home"); // file: resources/views/home.handlebars
});

app.get("/news", (req, res) => {
  console.log(req.query.q);
  res.render("news"); // file: resources/views/home.handlebars
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// npm init
// npm install express
// node index.js
// npm i nodemon --save-dev / npm i -g nodemon --> Them script "start": "nodemon index.js"
// npm i morgan --save-dev
// npm i node-sass --save-dev
