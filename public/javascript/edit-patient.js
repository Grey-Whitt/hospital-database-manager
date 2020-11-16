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
            document.location.replace('/patient-list');
        } else {
            $("#errorModal").modal()
        }
    }
}


document.querySelector('#updateUserForm').addEventListener('submit', updateUserFormHandler);