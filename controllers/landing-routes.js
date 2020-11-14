const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth')

router.get('/', auth, (req, res) => {
    if (req.session.role === 'doctor') {  
        res.redirect('/doctor-panel')
    
    } else {
        res.redirect('/visits')
    }
});

module.exports = router;