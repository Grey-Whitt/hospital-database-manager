const router = require('express').Router();
const sequelize = require('../config/connection');
const auth = require('../utils/auth');
const { Users, Doctors } = require('../models')

router.get('/', (req, res) => {
  // access model and run findall
  Doctors.findAll(
      {
          include: [
          { model: Users, as: 'user', attributes: { exclude: ["password"] }},
      ]
  })
    .then((data) => {
      const doctors = data.map((doctor) => doctor.get({ plain: true }));
      res.render('biographies', { doctors });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
module.exports = router;