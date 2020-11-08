const router = require('express').Router();
const visitsRoutes = require('./visits-routes')

router.use('/', visitsRoutes);

module.exports = router;