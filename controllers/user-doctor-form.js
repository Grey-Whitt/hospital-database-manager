const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth')
const checkRole = require('../utils/check-role')

router.get('/', auth, checkRole, (req, res) => {
    let doctor = false
    if (req.session.role === 'doctor') {
        doctor = true
    }
    res.render('user-doctor-form', {
        loggedIn: req.session.loggedIn,
        doctor
    });
});

module.exports = router;