const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const visitPageRoutes = require('./visitPage-routes');
const bioRoutes = require('./biographies');
const drlandingRoutes = require('./drlanding-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);
router.use('/doctors', bioRoutes);
router.use('/drlanding', drlandingRoutes);

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;