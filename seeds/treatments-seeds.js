const { Treatments } = require('../models')

const treatmentsData = [
    {
        treatment_name: 'Stop Coding',
        treatment_cost: 0,
        treatment_description: 'Simple yet effective.'
    },
    {
        treatment_name: 'Cast',
        treatment_cost: 100,
        treatment_description: 'If the fracture is bad the bone will have to be reset, then a cast will be left on until it is healed.'
    }
]

const seedTreatments = () => Treatments.bulkCreate(treatmentsData);

module.exports = seedTreatments;