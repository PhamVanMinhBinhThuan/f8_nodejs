const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express();
const port = 3000;

// Khong can ./routes/index van tu dong hieu la
// const route = require("./routes/index");
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

// Custom Middlewares
app.use(SortMiddleware);

// HTTP logger
// app.use(morgan("combined"));

// Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">
                    <span class="${icon}"></span>
                </a>`;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

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
