// imports
const express = require('express');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;

// test connection to dotenv
console.log(process.env['USER'])
// =========

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =========

// Pug stuff
app.set('view engine', 'pug');
app.get('/', function (req,res) {  // this is a placeholder test to make sure pug is connecting
    res.render('index', { title: "clinic database landing", message: "example message"});
})
// =========

// connect to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ', PORT ));
});
// =========