const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Users, Doctors } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/:id', auth, checkRole, (req, res) => {

    Doctors.findOne({
        where: {
            user_id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: [
            { model: Users, as: 'user' }
        ]
    })
        .then((data) => {
            let doctor_role = false
            if (req.session.role === 'doctor') {
                doctor_role = true
            }
            const doctor = data.get({ plain: true });
            res.render('edit-doctor', { id: req.params.id, doctor, loggedIn: true, role: doctor_role });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;