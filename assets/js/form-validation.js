document.addEventListener('DOMContentLoaded', function() {
    console.log(' Yesss!!! JavaScript file is loaded.');

    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            console.log('Form submit event triggered.');

            if (!form.checkValidity()) {
                event.preventDefault(); // Prevent form submission
                console.log('Form is not valid.'); // Debugging message
                alert('Please fill out all required fields marked with *.'); // Show custom error message
            } else {
                console.log('Form is valid.'); // Form is valid
            }
        });
    } else {
        console.error('Form with id "contactForm" not found.');
    }
});
