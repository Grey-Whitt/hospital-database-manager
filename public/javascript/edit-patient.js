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

    let role = '';
    if (document.querySelector('#up-role-doctor').checked) {
        role = 'doctor';
    } else if (document.querySelector('#up-role-patient').checked){
        role = 'patient';
    }

    if (first_name && last_name && phone && email) {
        if (password){
            const response = await fetch(`/api/users/${user_id}`, {
                method: 'put',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    email,
                    password,
                    role
                }),
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            const response = await fetch(`/api/users/${user_id}`, {
                method: 'put',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    phone,
                    email,
                    role
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
}


document.querySelector('#updateUserForm').addEventListener('submit', updateUserFormHandler);