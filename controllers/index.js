const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const visitPageRoutes = require('./visitPage-routes');
const formRoutes = require('./form-routes')
const docPanel = require('./doctor-panel')
const editVisit = require('./edit-visits')
const patientList = require('./patient-list');
const editPatient = require('./edit-patient');
const doctorList = require('./doctor-list');
const editDoctor = require('./edit-doctor');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);
router.use('/forms', formRoutes);
router.use('/doctor-panel', docPanel)
router.use('/edit-visits', editVisit)
router.use('/patient-list', patientList);
router.use('/edit-patient', editPatient);
router.use('/doctor-list', doctorList);
router.use('/edit-doctor', editDoctor)

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;