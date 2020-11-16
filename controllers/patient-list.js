const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Users } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/', auth, checkRole, (req, res) => {

    Users.findAll({
        where: {
            role: 'patient'
        }
    })
        .then((data) => {
            const patients = data.map((patient) => patient.get({ plain: true }));
            let doctor = false
            if (req.session.role === 'doctor') {
                doctor = true
            }
            res.render('patient-list', { patients, loggedIn: true, doctor });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });


});

module.exports = router;