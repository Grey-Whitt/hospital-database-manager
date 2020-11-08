const router = require('express').Router();
const Visits = require('../../models/Visits');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Visits.findAll({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;