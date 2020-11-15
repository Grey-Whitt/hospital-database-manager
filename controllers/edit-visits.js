const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Visits, Users, Ailments } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/', auth, checkRole, (req, res) => {

    Visits.findAll({
        include: [
            { model: Users, as: 'doctor' },
            { model: Users, as: 'patient' },
            { model: Ailments, as: 'ailment' }
        ]
    })
        .then((data) => {
            const visits = data.map((visit) => visit.get({ plain: true }));
            let doctor = false
            if (req.session.role === 'doctor') {
                doctor = true
            }
            res.render('edit-visits', { visits, loggedIn: true, role: doctor });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });


});

module.exports = router;