const router = require('express').Router();
const sequelize = require('../config/connection');
const models = require('../models');
const auth = require('../utils/auth')
const checkRole = (require('../utils/check-role'))

router.get('/', auth, checkRole, (req, res) => {
    res.render('drlanding', {session: req.session, loggedIn: true});
});

module.exports = router;