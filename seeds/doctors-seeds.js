const { Doctors } = require('../models')

const doctorData = [
    {
        user_id: 1,
        doctor_bio: '2-1B surgical droids, also known as 2-1B medical droids, were advanced medical droids popular across the galaxy to those that could afford them. At some point, a 2-1B droid typically cost 4,300 credits.',
        doctor_specialty: 'Surgery',
        doctor_education: 'Rhinnal State Medical Academy'
    },
    {
        user_id: 2,
        doctor_bio: 'A4-D is a laboratory assistant droid who worked for the Confederacy of Independent Systems as a medical/repair droid under General Grievous. a programming defect caused EV-A4-D to have a sadistic personality',
        doctor_specialty: 'cybernetic prosthetics',
        doctor_education: 'Manufactured by MerenData'
    },
    {
        user_id: 3,
        doctor_bio: "The FX-7 medical assistant droid was a medical droid manufactured by Medtech Industries as part of the FX-series of surgical assistants and nursing droids. Typically, an FX-7 droid cost 3,500 credits. After the FX-7's manufacturing ended, it was only available as used by the time of the Galactic Civil War.",
        doctor_specialty: 'Medical Assistant',
        doctor_education: 'manufactured by Medtech Industries'
    }
]

const seedDoctors = () => Doctors.bulkCreate(doctorData);

module.exports = seedDoctors;