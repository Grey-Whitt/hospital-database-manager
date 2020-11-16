var elements = document.getElementsByClassName("delete-visit");

//gets the posts id from the url and requests to delete that post from the database
async function deleteVisitHandler(event) {
    event.preventDefault();

    const id = event.target.getAttribute('data')
    
    const response = await fetch(`/api/visits/${id}`, {
        method: 'DELETE'
    });

    
    if (response.ok) {
        location.reload()
    } else {
        //add modal
        alert(response.statusText);
    }
}

Array.from(elements).forEach(function(element) {
    element.addEventListener('click', deleteVisitHandler);
});