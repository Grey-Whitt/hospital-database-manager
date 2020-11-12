
const router = require('express').Router();
const Users = require('../../models/Users');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Visits.findAll({
        include: [
            { model: Users, as: 'doctor'},
            { model: Users, as: 'patient'},
          ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// GET /api/user/1
router.get('/:id', (req, res) => {
    Users.findOne({
        where: {
            user_id: req.params.user_id
        }
    })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({message: 'No Users found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    Users.create({
        first_name: req.body.first_name ,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email.email,
        password: req.body.password,
        role: req.body.role
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/user/1
router.put('/:id', (req, res) => {
    Users.update(req.body, {
        where: {
            user_id: req.params.user_id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]){
                res.status(404).json({message: 'No User found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE /api/User/1
router.delete('/:id', (req, res) => {
    Users.destroy({
        where: {
            user_id: req.params.user_id
        }
    })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No User found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;