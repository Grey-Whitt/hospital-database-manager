const { Ailments } = require('../models')

const ailmentsData = [
    {
        ailment_name: 'Head Ache',
        ailment_description: 'Headache is pain in any region of the head. Headaches may occur on one or both sides of the head, be isolated to a certain location, radiate across the head from one point, or have a viselike quality. A headache may appear as a sharp pain, a throbbing sensation or a dull ache.',
        treatment_id: 1
    },
    {
        ailment_name: 'Confusion',
        ailment_description: "lack of understanding; uncertainty; the state of being bewildered or unclear in one's mind about something.",
        treatment_id: 1
    },
    {
        ailment_name: 'Broken Bone',
        ailment_description: 'The main symptom is pain. There may also be loss of functionality depending on the area affected.',
        treatment_id: 2
    }
]

const seedAilments = () => Ailments.bulkCreate(ailmentsData);

module.exports = seedAilments;