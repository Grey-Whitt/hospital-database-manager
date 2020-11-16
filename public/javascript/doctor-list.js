var elements = document.getElementsByClassName("delete-doctor");

async function deleteDoctor(event) {
    const user_id = event.target.id.replace("delete-doctor-", "");
    const doctor_id = event.target.getAttribute('data-doctor-id');
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
    if (doctor_id){
        const response2 =  await fetch(`/api/doctor/${doctor_id}`, {
            method: 'delete',
        });

        if (response2.ok) {   
            //document.location.replace('/visits');
        } else {
            $("#errorModal").modal()
        }
    }
    location.reload();
};

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', deleteDoctor);
});