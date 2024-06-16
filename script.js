document.addEventListener("DOMContentLoaded", function() {
    // Get the form, textarea, notes container, and remove all button elements
    var form = document.getElementById('noteForm');
    var textarea = document.getElementById('note');
    var notesContainer = document.getElementById('submittedNotesContainer');
    var removeAllBtn = document.getElementById('removeAllBtn');
    displaySubmittedNotes();
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the content of the textarea
        var noteContent = textarea.value.trim();

        if (noteContent === '') {
            alert('Напиши мнението си!');
            return;
        }

        // Save the note to local storage
        saveNoteToLocalStorage(noteContent);

        // Clear the textarea after submission
        textarea.value = '';

        // Display the submitted notes
        displaySubmittedNotes();
        
        // Provide feedback to the user
        alert('Твоето мнение е изпратено!');
    });

    // Function to save the note to local storage
    function saveNoteToLocalStorage(note) {
        var notes = localStorage.getItem('submittedNotes');
        if (!notes) {
            notes = [];
        } else {
            notes = JSON.parse(notes);
        }
        notes.push(note);
        localStorage.setItem('submittedNotes', JSON.stringify(notes));
    }

    // Function to display the submitted notes
    function displaySubmittedNotes() {
        var notes = localStorage.getItem('submittedNotes');
        notesContainer.innerHTML = ''; // Clear the container

        if (notes) {
            notes = JSON.parse(notes);
            notes.forEach(function(note, index) {
                var noteElement = document.createElement('p');
                noteElement.textContent = note;

                notesContainer.appendChild(noteElement);
            });
        }
    }

    // Add event listener for the "Remove All" button
    removeAllBtn.addEventListener('click', function() {
        removeAllNotes();
        displaySubmittedNotes(); // Refresh the display after removal
    });

    // Function to remove all submitted notes
    function removeAllNotes() {
        localStorage.removeItem('submittedNotes');
    }

    // Display submitted notes when the page loads
    displaySubmittedNotes();
});