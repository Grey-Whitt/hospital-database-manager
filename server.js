// imports
const express = require('express');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;
// =========

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// =========

// connect to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ', PORT ));
});
// =========