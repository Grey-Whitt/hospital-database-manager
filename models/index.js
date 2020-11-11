const Ailments = require('./Ailments')
const Doctors = require('./Doctors')
const Patients = require('./Patients')
const Treatments = require('./Treatments')
const Visits = require('./Visits')
const Users = require('./Users')

//visit has many Users (1 patient, 1 doctor)
//user has many visits

// Visits.hasMany(Users)

// Users.hasMany(Visits, {
//     foreignKey: ''
// })

// Visits.hasOne(Ailments, {
//     foreignKey: 'ailment_id'
// })

// Ailments.belongsTo(Visits)

// Ailments.hasOne(Treatments, {
//     foreignKey: "treatment_id"
// })

// Treatments.hasMany(Ailments, {
//     foreignKey: 'ailment_id'
// })

module.exports = {
    Ailments,
    Doctors,
    Patients,
    Treatments,
    Visits,
    Users,
}