// adds doctor if all fields are filled
async function addDoctorFormHandler(event) {
    event.preventDefault();

    const user_id = document.querySelector('#userId').value.trim();
    const doctor_bio = document.querySelector('#doctorBio').value.trim();
    const doctor_specialty = document.querySelector('#doctorSpec').value.trim();
    const doctor_education = document.querySelector('#doctorEd').value.trim();

    if (user_id && doctor_bio && doctor_specialty && doctor_education) {
        const response = await fetch('/api/doctors', {
            method: 'post',
            body: JSON.stringify({
                user_id,
                doctor_bio,
                doctor_specialty,
                doctor_education,
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

// updates doctor if all fields are filled
async function updateDoctorFormHandler(event) {
    event.preventDefault();

    const doctor_id = document.querySelector('#upDoctorId').value.trim();
    const user_id = document.querySelector('#upUserId').value.trim();
    const doctor_bio = document.querySelector('#upDoctorBio').value.trim();
    const doctor_specialty = document.querySelector('#upDoctorSpec').value.trim();
    const doctor_education = document.querySelector('#upDoctorEd').value.trim();

    if (doctor_id && user_id && doctor_bio && doctor_specialty && doctor_education) {
        const response = await fetch(`/api/doctors/${doctor_id}`, {
            method: 'put',
            body: JSON.stringify({
                user_id,
                doctor_bio,
                doctor_specialty,
                doctor_education,
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

// updates doctor if all fields are filled
async function deleteDoctorFormHandler(event) {
    event.preventDefault();

    const doctor_id = document.querySelector('#delDoctorId').value.trim();

    if (user_id ) {
        const response = await fetch(`/api/doctors/${doctor_id}`, {
            method: 'delete',
        });

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

document.querySelector('#newDoctorForm').addEventListener('submit', addDoctorFormHandler);

document.querySelector('#updateDoctorForm').addEventListener('submit', updateDoctorFormHandler);

document.querySelector('#deleteDoctorForm').addEventListener('submit', deleteDoctorFormHandler);