const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const visitPageRoutes = require('./visitPage-routes');
const formRoutes = require('./form-routes')
const docPanel = require('./doctor-panel')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);
router.use('/forms', formRoutes);
router.use('/doctor-panel', docPanel)

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;