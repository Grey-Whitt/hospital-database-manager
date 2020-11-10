const router = require('express').Router();
const Ailments = require('../../models/Ailments');
const sequelize = require('../../config/connection');

// GET /api/ailments
router.get('/', (req, res) => {
    // access model and run findall
    Ailments.findAll()
        .then(dbAilmentData => res.json(dbAilmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/ailment/1
router.get('/:id', (req, res) => {
    Ailments.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbAilmentData => {
            if (!dbAilmentData){
                res.status(404).json({message: 'No ailment found with this id'});
                return;
            }
            res.json(dbAilmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/ailment
router.post('/', (req, res) => {
    Ailments.create({
        ailment_name: req.body.ailment_name,
        ailment_description: req.body.ailment_description
    })
        .then(dbAilmentData => res.json(dbAilmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/ailment/1
router.put('/:id', (req, res) => {
    Ailments.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbAilmentData => {
            if (!dbAilmentData[0]){
                res.status(404).json({message: 'No ailment found with this id'});
                return;
            }
            res.json(dbAilmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE /api/ailment/1
router.delete('/:id', (req, res) => {
    Ailments.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbAilmentData => {
            if(!dbAilmentData) {
                res.status(404).json({message: 'No ailment found with this id'});
                return;
            }
            res.json(dbAilmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;