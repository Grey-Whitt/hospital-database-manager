const router = require('express').Router();
const Doctors = require('../../models/Doctors');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Doctors.findAll({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;