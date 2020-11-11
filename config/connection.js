//import sequelize
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log(process.env.USER, process.env.PASS)
  sequelize = new Sequelize(process.env.NAME, process.env.USER, process.env.PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize;