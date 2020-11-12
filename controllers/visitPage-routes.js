const router = require('express').Router();
const sequelize = require('../config/connection');
const { Visits, Users } = require('../models')

router.get('/', (req, res) => {
  Visits.findAll({
    include: [
      { model: Users, as: 'doctor' },
      { model: Users, as: 'patient' },
    ],
  })
    .then((data) => {
      const visits = data.map((visit) => visit.get({ plain: true }));
      console.log(visits);
      res.render('visits', { visits });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
module.exports = router;