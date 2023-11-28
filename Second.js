document.addEventListener("DOMContentLoaded", function (e) {
    const taskDisplay = localStorage.getItem('task');
    const NoteDisplay = localStorage.getItem('Note');
    const UrgenceyDisplay = localStorage.getItem('Urgencey');

    // Check if the element with ID 'yourDisplayElementId' exists in your HTML
    const Display = document.getElementById('yourDisplayElementId');

    if (Display) {
        // Display retrieved data onto HTML if the element exists
        Display.innerHTML = `<h1>${taskDisplay}</h1><h1>${NoteDisplay}</h1><h1>${UrgenceyDisplay}</h1>`;
    } else {
        console.error("Element with ID 'yourDisplayElementId' not found.");
    }
});
