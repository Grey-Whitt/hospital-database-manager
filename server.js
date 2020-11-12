// imports
const express = require('express');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers')
// =========

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =========

<<<<<<< HEAD
// connect to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ', PORT ));
=======
//view engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// =======

app.use(routes)

// connect to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
>>>>>>> models
});
// =========