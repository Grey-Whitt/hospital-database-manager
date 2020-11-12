const { Users } = require('../models')

const userData = [
    {
        first_name: '2-1B' ,
        last_name: 'surgical droid' ,
        phone: 1112223333,
        email: '21b@email.com',
        password: 1234,
        role: 'doctor'
    },
    {
        first_name: 'Gonk' ,
        last_name: 'Droid' ,
        phone: 4445556666,
        email: 'ayfourdee@email.com',
        password: 1234,
        role: 'doctor'
    },
    {
        first_name: 'FX-7' ,
        last_name: 'medical assistant droid' ,
        phone: 7778889999,
        email: 'fx7@email.com',
        password: 1234,
        role: 'doctor'
    },
    {
        first_name: 'Dan' ,
        last_name: 'Manson' ,
        phone: 4,
        email: 'dantheman@hotmail.com',
        password: 1234,
        role: 'patient'
    },
    {
        first_name: 'Anakin' ,
        last_name: 'Sky Walker',
        phone: 8675309,
        email: 'death2younglings@email.com',
        password: 1234,
        role: 'patient'
    },
    {
        first_name: 'qui gon' ,
        last_name: 'jinn' ,
        phone: 1112223333,
        email: 'quigons-gin@email.com',
        password: 1234,
        role: 'patient'
    }
]

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;