// updates user if all fields are filled
async function updateUserFormHandler(event) {
    event.preventDefault();
    
    const user_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const first_name = document.querySelector('#upFirstName').value.trim();
    const last_name = document.querySelector('#upLastName').value.trim();
    const phone = document.querySelector('#upPhone').value.trim();
    const email = document.querySelector('#upEmail').value.trim();
    const password = document.querySelector('#upPassword').value.trim();

    const doctor_id = document.querySelector('#doctor_id').getAttribute('data-doctor-id');
    const doctor_specialty = document.querySelector('#upSpecialty').value.trim();
    const doctor_education = document.querySelector('#upEducation').value.trim();
    const doctor_bio = document.querySelector('#upBio').value.trim();

    if (first_name && last_name && phone && email) {
        let response = '';
        if (password){
            response = await fetch(`/api/users/${user_id}`, {
                method: 'put',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            response = await fetch(`/api/users/${user_id}`, {
                method: 'put',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    email
                }),
                headers: { 'Content-Type': 'application/json' }
            });
        }  

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }

    if (doctor_specialty && doctor_education && doctor_bio){
        const response2 = await fetch(`/api/doctors/${doctor_id}`, {
            method: 'put',
            body: JSON.stringify({
                doctor_specialty,
                doctor_education,
                doctor_bio
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response2.ok) {   
            document.location.replace('/doctor-list');
        } else {
            $("#errorModal").modal()
        }
    }

}


document.querySelector('#updateUserForm').addEventListener('submit', updateUserFormHandler);