const Ailments = require('./Ailments')
const Doctors = require('./Doctors')
const Visits = require('./Visits')
const Users = require('./Users')

Users.hasMany(Visits, {foreignKey : 'visit_id'})
Visits.belongsTo(Users, {as: 'doctor', foreignKey: 'doctor_id'})
Visits.belongsTo(Users, {as: 'patient', foreignKey: 'patient_id'})

Visits.hasOne(Ailments, {
    foreignKey: 'ailment_id',
    constraints: false
})

Users.hasOne(Doctors, {foreignKey: 'user_id'});
Doctors.belongsTo(Users, {foreignKey: 'user_id'});

module.exports = {
    Ailments,
    Doctors,
    Visits,
    Users,
}