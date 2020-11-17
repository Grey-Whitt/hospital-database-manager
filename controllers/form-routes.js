const router = require('express').Router();
const auth = require('../utils/auth')
const checkRole = require('../utils/check-role');
const { Users, Doctors, Ailments } = require('../models')

router.get('/visits', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }

    Promise.all([
        Users.findAll({attributes: { exclude: ['password'] }, where: {role: "doctor" }}), 
        Users.findAll({attributes: { exclude: ['password'] }, where: {role: "patient" }}), 
        Ailments.findAll()
    ])
    .then((data) => {
        const doctors = data[0].map((doctorIns) => doctorIns.get({ plain: true }));
        const patients = data[1].map((patient) => patient.get({ plain: true }));
        const ailments = data[2].map((ailment) => ailment.get({ plain: true }));
        res.render('visits-form', {
            doctors, patients, ailments,
            loggedIn: req.session.loggedIn,
            doctor
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
    res.render('visits-form', {
        dataObj,
        loggedIn: req.session.loggedIn,
        doctor
    }); 

});

router.get('/user', (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('user-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

module.exports = router;