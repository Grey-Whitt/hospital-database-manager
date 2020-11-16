const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Visits, Users, Ailments } = require('../models')
const checkRole = require('../utils/check-role')

router.get('/', auth, (req, res) => {
  if (req.session.role === 'doctor') {
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
        res.render('visits', { visits, loggedIn: true, doctor });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    Visits.findAll({
      where: {
        // use the ID from the session
        patient_id: req.session.user_id
      },
      include: [
        { model: Users, as: 'doctor' },
        { model: Users, as: 'patient' },
        { model: Ailments, as: 'ailment' }
      ]
    })
      .then((data) => {
        const visits = data.map((visit) => visit.get({ plain: true }));
        if (visits.length === 0) {
          res.redirect('/')
        } else {
          res.render('visits', { visits, loggedIn: true, doctor: false });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }

});

module.exports = router;