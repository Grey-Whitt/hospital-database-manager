const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const visitPageRoutes = require('./visitPage-routes');
const bioRoutes = require('./biographies');
const drlandingRoutes = require('./drlanding-routes');
const visitsForm = require('./visits-form');
const userForms = require('./user-forms');
const userDocForm = require('./user-doctor-form');
const docForm = require('./doctor-form');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);
router.use('/doctors', bioRoutes);
router.use('/drlanding', drlandingRoutes);
router.use('/visits-form', visitsForm);
router.use('/user-form', userForms)
router.use('/user-doctor-form', userDocForm);
router.use('/doctor-form', docForm);

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;