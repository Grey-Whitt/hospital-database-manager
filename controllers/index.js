const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const visitPageRoutes = require('./visitPage-routes');

const visitsForm = require('./visits-form');
const userForms = require('./user-forms');
const userDocForm = require('./user-doctor-form');
const docForm = require('./doctor-form');
const docPanel = require('./doctor-panel')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);
router.use('/visits-form', visitsForm);
router.use('/user-form', userForms)
router.use('/user-doctor-form', userDocForm);
router.use('/doctor-form', docForm);
router.use('/doctor-panel', docPanel)

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;