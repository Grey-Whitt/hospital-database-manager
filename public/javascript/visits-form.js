// adds visit if all fields are filled
async function addVisitFormHandler(event) {
    event.preventDefault();

    const patient_id = document.querySelector('#patientId').value.trim();
    const doctor_id = document.querySelector('#doctorId').value.trim();
    const ailment_id = document.querySelector('#ailmentId').value.trim();
    const visit_note = document.querySelector('#visitNote').value.trim();

    if (patient_id && doctor_id && ailment_id && visit_note) {
        const response = await fetch('/api/visits', {
            method: 'post',
            body: JSON.stringify({
                patient_id,
                doctor_id,
                ailment_id,
                visit_note
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

// updates visit if all fields are filled
async function updateVisitFormHandler(event) {
    event.preventDefault();

    const visit_id = document.querySelector('#upVisitId').value.trim();
    const patient_id = document.querySelector('#upPatientId').value.trim();
    const doctor_id = document.querySelector('#upDoctorId').value.trim();
    const ailment_id = document.querySelector('#upAilmentId').value.trim();
    const visit_note = document.querySelector('#upVisitNote').value.trim();

    if (visit_id && patient_id && doctor_id && ailment_id && visit_note) {
        const response = await fetch(`/api/visits/${visit_id}`, {
            method: 'put',
            body: JSON.stringify({
                patient_id,
                doctor_id,
                ailment_id,
                visit_note
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

document.querySelector('#newVisitForm').addEventListener('submit', addVisitFormHandler);

document.querySelector('#updateVisitForm').addEventListener('submit', updateVisitFormHandler);