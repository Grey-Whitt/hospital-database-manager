const Ailments = require('./Ailments')
const Doctors = require('./Doctors')
const Visits = require('./Visits')
const Users = require('./Users')

Users.hasMany(Visits, {foreignKey : 'user_id'})
Visits.belongsTo(Users, {as: 'doctor', foreignKey: 'doctor_id'})
Visits.belongsTo(Users, {as: 'patient', foreignKey: 'patient_id'})

Visits.hasOne(Ailments, {
    foreignKey: 'ailment_id',
    constraints: false
})

module.exports = {
    Ailments,
    Doctors,
    Visits,
    Users,
}