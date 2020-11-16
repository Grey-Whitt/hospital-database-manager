const router = require('express').Router();
const auth = require('../utils/auth')
const checkRole = require('../utils/check-role')

router.get('/visits', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('visits-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

router.get('/user', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('user-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

router.get('/doctor-user', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('user-doctor-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

router.get('/doctor', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('doctor-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

module.exports = router;