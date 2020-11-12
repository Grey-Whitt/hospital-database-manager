const seedAilments = require('./ailment-seeds')
const seedDoctors = require('./doctors-seeds')
const seedUsers = require('./users-seeds')
const seedVisits = require('./visits-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedAilments();
    console.log('\n----- AILMENTS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedDoctors();
    console.log('\n----- DOCTORS SEEDED -----\n');

    await seedVisits();
    console.log('\n----- VISITS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();