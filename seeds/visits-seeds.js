const { Visits } = require('../models')

const visitData = [
    {
        patient_id: 4,
        ailment_id: 2,
        doctor_id: 1,
        visit_date: "2020-10-30",
        visit_note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        patient_id: 5,
        ailment_id: 1,
        doctor_id: 2,
        visit_date: "2020-11-30",
        visit_note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
        patient_id: 6,
        ailment_id: 3,
        doctor_id: 3,
        visit_date: "2020-11-14",
        visit_note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
];

const seedVisits = () => Visits.bulkCreate(visitData);

module.exports = seedVisits;