const router = require('express').Router();
const ailmentsRoutes = require('./ailments-routes');
const doctorRoutes = require('./doctor-routes');
const visitsRoutes = require('./visits-routes');
const userRoutes = require('./users-routes')

router.use('/users', userRoutes);
router.use('/ailments', ailmentsRoutes);
router.use('/doctors', doctorRoutes);
router.use('/visits', visitsRoutes);

module.exports = router;