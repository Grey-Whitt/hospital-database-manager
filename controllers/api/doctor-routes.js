const router = require('express').Router();
const Doctors = require('../../models/Doctors');
const sequelize = require('../../config/connection');

// GET /api/doctors
router.get('/', (req, res) => {
    // access model and run findall
    Doctors.findAll()
        .then(dbDoctorData => res.json(dbDoctorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/doctor/1
router.get('/:id', (req, res) => {
    Doctors.findOne({
        where: {
            id: req.params.id
        }
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

// POST /api/doctor
router.post('/', (req, res) => {
    Doctors.create({
        doctor_name: req.body.doctor_name,
        doctor_password: req.body.doctor_password
    })
        .then(dbDoctorData => res.json(dbDoctorData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/doctor/1
router.put('/:id', (req, res) => {
    Doctors.update(req.body, {
        where: {
            id: req.params.id
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

// DELETE /api/doctor/1
router.delete('/:id', (req, res) => {
    Doctors.destroy({
        where: {
            id: req.params.id
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