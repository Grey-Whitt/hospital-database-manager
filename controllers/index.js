const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//send 404 if user goes to undefined route
router.use((req, res) => {
    res.status(418).end();
})

module.exports = router;