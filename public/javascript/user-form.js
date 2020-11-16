// adds user if all fields are filled
async function addUserFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const role = 'patient';

    if (first_name && last_name && phone && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
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
        if (response.ok) {
            if (response.ok) {
                const response = await fetch('/api/users/login', {
                    method: 'post',
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });
                
                if (response.ok) {
                    document.location.replace('/landing');
                } else {
                    $("#loginErrorModal").modal()
                }

            } else {
                $("#errorModal").modal()
            }
        } else {
            $("#errorModal").modal()
        }

    }
}

document.querySelector('#newUserForm').addEventListener('submit', addUserFormHandler);