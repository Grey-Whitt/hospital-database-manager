const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('homepage2', {
        loggedIn: req.session.loggedIn,
        role: doctor
    });
});

router.get('/login', (req, res) => {
    //check if user is logged in
    res.render('login');
});

module.exports = router;