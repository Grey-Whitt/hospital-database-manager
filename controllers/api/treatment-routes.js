const router = require('express').Router();
const Treatments = require('../../models/Treatments');
const sequelize = require('../../config/connection');

// GET /api/treatments
router.get('/', (req, res) => {
    // access model and run findall
    Treatments.findAll()
        .then(dbTreatmentData => res.json(dbTreatmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/treatment/1
router.get('/:id', (req, res) => {
    Treatments.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbTreatmentData => {
            if (!dbTreatmentData){
                res.status(404).json({message: 'No treatment found with this id'});
                return;
            }
            res.json(dbTreatmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/treatment
router.post('/', (req, res) => {
    Treatments.create({
        treatment_name: req.body.treatment_name,
        treatment_cost: req.body.treatment_cost,
        treatment_description: req.body.treatment_description
    })
        .then(dbTreatmentData => res.json(dbTreatmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/treatment/1
router.put('/:id', (req, res) => {
    Treatments.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbTreatmentData => {
            if (!dbTreatmentData[0]){
                res.status(404).json({message: 'No treatment found with this id'});
                return;
            }
            res.json(dbTreatmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE /api/treatment/1
router.delete('/:id', (req, res) => {
    Treatments.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTreatmentData => {
            if(!dbTreatmentData) {
                res.status(404).json({message: 'No treatment found with this id'});
                return;
            }
            res.json(dbTreatmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;