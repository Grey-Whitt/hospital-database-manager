const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const visitPageRoutes = require('./visitPage-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/visits', visitPageRoutes);

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;