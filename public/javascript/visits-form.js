// adds visit if all fields are filled
async function addVisitFormHandler(event) {
    event.preventDefault();

    const patient_id = document.querySelector('#patientId').value.trim();
    const doctor_id = document.querySelector('#doctorId').value.trim();
    const ailment_id = document.querySelector('#ailmentId').value.trim();
    const visit_note = document.querySelector('#visitNote').value.trim();

    if (patientId && doctorId && ailmentId && visitNote) {
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

document.querySelector('#newVisitForm').addEventListener('submit', addVisitFormHandler);