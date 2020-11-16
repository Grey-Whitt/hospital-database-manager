const router = require('express').Router();
const sequelize = require('../config/connection');
const { Users, Doctors } = require('../models')
const auth = require('../utils/auth')

router.get('/', (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('homepage', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

router.get('/doctors', (req, res) => {
    // access model and run findall
    Doctors.findAll(
        {
            include: [
                { model: Users, as: 'user', attributes: { exclude: ["password"] } },
            ]
        })
        .then((data) => {
            const doctors = data.map((doctor) => doctor.get({ plain: true }));
            res.render('biographies', { doctors });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    //check if user is logged in
    res.render('login');
});

router.get('/landing', auth, (req, res) => {
    if (req.session.role === 'doctor') {  
        res.redirect('/doctor-panel')

    } else {
        res.redirect('/visits')
    }
});

module.exports = router;