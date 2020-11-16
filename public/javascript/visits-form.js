// adds visit if all fields are filled
async function addVisitFormHandler(event) {
    event.preventDefault();

    const patient_id = document.querySelector('#patient').value.trim();
    const doctor_id = document.querySelector('#doctor').value.trim();
    const ailment_id = document.querySelector('#ailment').value.trim();
    const visit_note = document.querySelector('#visitNote').value.trim();
    const visit_date = document.querySelector('#visitDate').value.trim();

    if (patient_id && doctor_id && ailment_id && visit_note) {
        const response = await fetch('/api/visits', {
            method: 'post',
            body: JSON.stringify({
                patient_id,
                doctor_id,
                ailment_id,
                visit_date,
                visit_note
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {   
            document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

document.querySelector('#newVisitForm').addEventListener('submit', addVisitFormHandler);