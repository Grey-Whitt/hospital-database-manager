var elements = document.getElementsByClassName("delete-patient");

async function deletePatient(event) {
    const user_id = event.target.id.replace("delete-patient-", "");
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
    location.reload();
};

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', deletePatient);
});