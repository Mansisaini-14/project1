// Initialize EmailJS
(function () {
    emailjs.init("Z8TMtrbA66yZT6rHy"); // Replace with your user ID
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('send-name').value;
    const email = document.getElementById('send-email').value;
    const subject = document.getElementById('send-subject').value;
    const message = document.getElementById('send-message').value;

    // Send email
    emailjs.send("service_251q5sr","template_jsgj0bj",{
        subject: subject,
        to_name: "Mansi",
        from_name: name,
        email: email,
        message: message,
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Email sending failed.');
        });
});
