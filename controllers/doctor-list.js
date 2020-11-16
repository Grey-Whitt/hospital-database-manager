const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Users, Doctors } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/', auth, checkRole, (req, res) => {

    Doctors.findAll({
        include: [
            { model: Users, as: 'user' }
        ]
    })
        .then((data) => {
            const doctors = data.map((doctor) => doctor.get({ plain: true }));
            let doctor_role = false
            if (req.session.role === 'doctor') {
                doctor_role = true
            }
            res.render('doctor-list', { doctors, loggedIn: true, doctor: doctor_role });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });


});

module.exports = router;