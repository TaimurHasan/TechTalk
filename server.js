const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// handlebars template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// sessions for express and sequelize
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create table in database for sessions
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// instantialize express
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder for front end
app.use(express.static(path.join(__dirname, 'public')));

// set handlebars as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use sessions
app.use(session(sess))

// use routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));
});