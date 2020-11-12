const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes)

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;