const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Doctors, Users } = require('../../models');

// GET /api/doctors
router.get('/', (req, res) => {
    // access model and run findall
    Doctors.findAll(
        {
            include: [
            { model: Users, as: 'user', attributes: { exclude: ["password"] }},
        ]
    })
        .then(dbDoctorData => res.json(dbDoctorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/doctors/1
router.get('/:id', (req, res) => {
    Doctors.findOne({
        where: {
            doctor_id: req.params.id
        },
        include: [
            { model: Users, as: 'user', attributes: { exclude: ["password"] }},
        ]
    })
        .then(dbDoctorData => {
            if (!dbDoctorData){
                res.status(404).json({message: 'No doctor found with this id'});
                return;
            }
            res.json(dbDoctorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/doctors
router.post('/', (req, res) => {
    Doctors.create({
        user_id: req.body.user_id,
        doctor_bio: req.body.doctor_bio,
        doctor_specialty: req.body.doctor_specialty,
        doctor_education: req.body.doctor_education
    })
        .then(dbDoctorData => res.json(dbDoctorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/doctors/1
router.put('/:id', (req, res) => {
    Doctors.update(req.body, {
        where: {
            doctor_id: req.params.id
        }
    })
        .then(dbDoctorData => {
            if (!dbDoctorData[0]){
                res.status(404).json({message: 'No doctor found with this id'});
                return;
            }
            res.json(dbDoctorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE /api/doctors/1
router.delete('/:id', (req, res) => {
    Doctors.destroy({
        where: {
            doctor_id: req.params.id
        }
    })
        .then(dbDoctorData => {
            if(!dbDoctorData) {
                res.status(404).json({message: 'No doctor found with this id'});
                return;
            }
            res.json(dbDoctorData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;