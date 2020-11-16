const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Users } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/:id', auth, checkRole, (req, res) => {

    Users.findOne({
        where: {
            user_id: req.params.id
        },
        attributes: { exclude: ['password'] }
    })
        .then((data) => {
            let doctor = false
            if (req.session.role === 'doctor') {
                doctor = true
            }
            const patient = data.get({ plain: true });
            res.render('edit-patient', { id: req.params.id, patient, loggedIn: true, role: doctor });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;