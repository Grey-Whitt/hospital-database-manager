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
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

// updates user if all fields are filled
async function updateUserFormHandler(event) {
    event.preventDefault();

    const user_id = document.querySelector('#upUserId').value.trim();
    const first_name = document.querySelector('#upFirstName').value.trim();
    const last_name = document.querySelector('#upLastName').value.trim();
    const phone = document.querySelector('#upPhone').value.trim();
    const email = document.querySelector('#upEmail').value.trim();
    const password = document.querySelector('#upPassword').value.trim();
    const role = 'patient';

    if (first_name && last_name && phone && email && password) {
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

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

// updates user if all fields are filled
async function deleteUserFormHandler(event) {
    event.preventDefault();

    const user_id = document.querySelector('#upUserId').value.trim();

    if (user_id ) {
        const response = await fetch(`/api/users/${user_id}`, {
            method: 'delete',
        });

        if (response.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
}

document.querySelector('#newUserForm').addEventListener('submit', addUserFormHandler);

document.querySelector('#updateUserForm').addEventListener('submit', updateUserFormHandler);

document.querySelector('#deleteUserForm').addEventListener('submit', deleteUserFormHandler);