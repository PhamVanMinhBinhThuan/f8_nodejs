const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// npm init
// npm install express
// node index.js
// npm i nodemon --save-dev / npm i -g nodemon
// npm i morgan --save-dev
