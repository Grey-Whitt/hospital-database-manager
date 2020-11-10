
//example update
// router.put('/:id', auth, (req, res) => {
//     Post.update(
//         {
//             title: req.body.title,
//             post_content: req.body.post_content
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({ message: 'No post found with this id' });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

const router = require('express').Router();
const Patients = require('../../models/Patients');
const sequelize = require('../../config/connection');

// GET /api/patients
router.get('/', (req, res) => {
    // access model and run findall
    Patients.findAll()
        .then(dbPatientData => res.json(dbPatientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/patient/1
router.get('/:id', (req, res) => {
    Patients.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbPatientData => {
            if (!dbPatientData){
                res.status(404).json({message: 'No patients found with this id'});
                return;
            }
            res.json(dbPatientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/patient
router.post('/', (req, res) => {
    Patients.create({
        patient_name: req.body.patient_name,
        patient_phone: req.body.patient_phone,
        patient_password: req.body.patient_password
    })
        .then(dbPatientData => res.json(dbPatientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// PUT /api/patient/1
router.put('/:id', (req, res) => {
    Patients.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbPatientData => {
            if (!dbPatientData[0]){
                res.status(404).json({message: 'No patient found with this id'});
                return;
            }
            res.json(dbPatientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE /api/patient/1
router.delete('/:id', (req, res) => {
    Patients.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPatientData => {
            if(!dbPatientData) {
                res.status(404).json({message: 'No patient found with this id'});
                return;
            }
            res.json(dbPatientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;