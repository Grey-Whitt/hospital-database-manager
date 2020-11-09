const router = require('express').Router();
const ailmentsRoutes = require('./ailments-routes');
const doctorRoutes = require('./doctor-routes');
const patientRoutes = require('./patient-routes');
const treatmentRoutes = require('./treatment-routes');
const visitsRoutes = require('./visits-routes');

router.use('/ailments', ailmentsRoutes);
router.use('/doctors', doctorRoutes);
router.use('/patients', patientRoutes);
router.use('/treatments', treatmentRoutes);
router.use('/visits', visitsRoutes);

module.exports = router;