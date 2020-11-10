const Ailments = require('./Ailments')
const Doctors = require('./Doctors')
const Patients = require('./Patients')
const Treatments = require('./Treatments')
const Visits = require('./Visits')

Visits.hasOne(Patients, {
    foreignKey: 'patients_id'
})

Visits.hasOne(Doctors, {
    foreignKey: 'doctor_id'
})

Visits.hasOne(Ailments, {
    foreignKey: 'ailment_id'
})

Patients.hasMany(Visits, {
    foreignKey: 'visit_id'
})

Doctors.hasMany(Visits, {
    foreignKey: 'visit_id'
})

Ailments.hasMany(Visits, {
    foreignKey: 'visit_id'
})

Ailments.hasOne(Treatments, {
    foreignKey: "treatment_id"
})

Treatments.hasMany(Ailments, {
    foreignKey: 'ailment_id'
})