const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Khong can ./routes/index van tu dong hieu la
// const route = require("./routes/index");
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
// npm init
// npm install express
// node index.js
// npm i nodemon --save-dev / npm i -g nodemon --> Them script "start": "nodemon index.js"
// npm i morgan --save-dev
// npm i node-sass --save-dev
