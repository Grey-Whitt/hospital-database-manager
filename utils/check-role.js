//if user is not logged in and tries to 
const checkRole = (req, res, next) => {
    if (req.session.role != 'doctor') {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports = checkRole;