const router = require('express').Router();
const auth = require('../utils/auth')
const checkRole = require('../utils/check-role');
const { Users, Doctors, Ailments } = require('../models')

router.get('/visits', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    let dataObj = {};
    
    Users.findAll({
        attributes: { exclude: ['password'] },
        where: {
            role: "doctor"   
        }
    })
    .then((doctorData) => {
        const doctors = doctorData.map((doctor) => doctor.get({ plain: true }));
        dataObj.doctors = doctors;
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
    .then(() => {
        Users.findAll({
            attributes: { exclude: ['password'] },
            where: {
                role: "patient"   
            }
        })
        .then((patientData) => {
            const patients = patientData.map((patient) => patient.get({ plain: true }));
            dataObj.patients = patients;
        })
    })
    .then(() => {
        Ailments.findAll()
        .then((ailmentData) => {
            const ailments = ailmentData.map((ailment) => ailment.get({ plain: true }));
            dataObj.ailments = ailments;
        })
    
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    })
    .then(() => {
        res.render('visits-form', {
            dataObj,
            loggedIn: req.session.loggedIn,
            doctor
        });  
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