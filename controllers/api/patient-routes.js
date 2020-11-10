
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

router.get('/', (req, res) => {
    Patients.findAll({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;