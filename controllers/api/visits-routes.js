const router = require('express').Router();
const { Visits, Users, Ailments } = require('../../models');
const sequelize = require('../../config/connection');
const checkRole = require('../../utils/check-role')

router.get('/', checkRole, (req, res) => {
    Visits.findAll({
        include: [
            { model: Users, as: 'doctor', attributes: { exclude: ["password"] } },
            { model: Users, as: 'patient', attributes: { exclude: ["password"] } },
            { model: Ailments, as: 'ailment'} 
        ]

    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    Visits.findOne(
        {
            where: {
                visit_id: req.params.id
            },
            include: [
                { model: Users, as: 'doctor', attributes: { exclude: ["password"] } },
                { model: Users, as: 'patient', attributes: { exclude: ["password"] } },
                { model: Ailments, as: 'ailment'}
            ]
        }
    )
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {
    Visits.create({
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id,
        ailment_id: req.body.ailment_id,
        visit_note: req.body.visit_note
    })
        .then(dbTreatmentData => res.json(dbTreatmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.put('/:id', (req, res) => {
    Visits.findOne(
        {
            patient_id: req.body.patient_id,
            doctor_id: req.body.doctor_id,
            ailment_id: req.body.ailment_id,
            visit_note: req.body.visit_note
        },
        {
            where: {
                visit_id: req.params.id
            }
        }
    )
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No visit found with this id' });
                return;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
    Visits.destroy(
        {
            where: {
                visit_id: req.params.id
            }
        }
    )
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No visit found with this id' });
                return;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;