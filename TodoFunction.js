











//Creating the Add button.

//on click Add button will display a "form" type of information. This will be in a seperate container.
//strictly to accept consumer data and display it onto the html.
//Best way to conduct this is through a div class id with the child of a ul while js is creating the pre child of li to display task.
document.addEventListener("DOMContentLoaded", function (e) {
    const start = document.getElementById('Start');
    const container = document.querySelector('.container');

    start.addEventListener("click", function (e) {
        e.preventDefault();

        start.style.display = 'none';

        const create = document.createElement('button');
        create.setAttribute('id', 'test');
        create.innerText = "Add Todo!";
        container.appendChild(create);

        // Event listener for 'Add Todo' button
        create.addEventListener("click", function (e) {
            e.preventDefault();
            const form = document.createElement('form');
            form.setAttribute('id', 'formClass');
            container.appendChild(form);

            const taskInput = document.createElement('input');
            const noteInput = document.createElement('input');

            taskInput.placeholder = "Task";
            noteInput.placeholder = "Notes";

            taskInput.type = "text";
            noteInput.type = "text";

            taskInput.name = "task";
            noteInput.name = "note";

            form.appendChild(taskInput);
            form.appendChild(noteInput);

            const urgencyLabel = document.createElement('label');
            urgencyLabel.setAttribute('for', 'urgency');
            form.appendChild(urgencyLabel);

            const urgencySelect = document.createElement('select');
            urgencySelect.setAttribute('id', 'urgency');
            const options = ['Urgent', 'Moderate', 'Low'];

            options.forEach(optionText => {
                const option = document.createElement('option');
                option.setAttribute('value', optionText);
                option.innerText = optionText;
                urgencySelect.appendChild(option);
                //If statechange the color the Urgent, Moderate, low/green
            });

            form.appendChild(urgencySelect);

            const Submit = document.createElement('button');
            Submit.setAttribute('id', 'submitForm');
            Submit.innerText = "Add Task";
            form.appendChild(Submit);

            Submit.addEventListener("click", function (e) {
                e.preventDefault();
                const dataContainer = document.createElement('ul');
                dataContainer.setAttribute('class', 'data');
                const taskOut = document.createElement('li');
                taskOut.setAttribute('id', 'Task');
                const noteOut = document.createElement('li');
                noteOut.setAttribute('id', 'Note');
                const urgOut = document.createElement('li');
                urgOut.setAttribute('id', 'urg');
                const taskLabel = document.createElement('div');
                const noteLabel = document.createElement('div');
                const urgLabel = document.createElement('div');

                container.appendChild(dataContainer);
                taskOut.textContent = taskInput.value;
                noteOut.textContent = noteInput.value;
                urgOut.textContent = urgencySelect.value;
                taskLabel.innerText = 'Task';
                noteLabel.innerText = 'Notes'
                urgLabel.innerText = 'Urgencey';

                //Editing everything into localStorage



                dataContainer.appendChild(taskOut);
                dataContainer.appendChild(noteOut);
                dataContainer.appendChild(urgOut);
                dataContainer.appendChild(taskLabel);
                dataContainer.appendChild(noteLabel);
                dataContainer.appendChild(urgLabel);

                document.getElementById('formClass').reset();
                //remove The button function redo.
            });
            deleteButton.addEventListener('click', function (e) {
                dataContainer.removeChild(data);
            });
        });
    });

});

//I have teh add perfect! Now i need to create an html page that will present the inforamtion stored to you.
//aLL THE OUTPUTS WILL BE SENT TO THIS PAGE AND WHEN YOU CLICKE YTHE APP AGAIN IT WILLS SEND DIRECTLY TO THE HTML page.




///Specific Information i want to pull from this.


//Createing quikc drop downbar regarding the urg output

