const express = require('express');
const path = require('path');

// instantialize express
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder for front end
app.use(express.static(path.join(__dirname, 'public')));
