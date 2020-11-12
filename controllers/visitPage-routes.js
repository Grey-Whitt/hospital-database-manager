const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Visits, Users, Ailments } = require('../models')

router.get('/', auth, (req, res) => {
  Visits.findAll({
    include: [
      { model: Users, as: 'doctor' },
      { model: Users, as: 'patient' },
      { model: Ailments, as: 'ailment' }
    ]
  })
    .then((data) => {
      const visits = data.map((visit) => visit.get({ plain: true }));
      res.render('visits', { visits, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
module.exports = router;