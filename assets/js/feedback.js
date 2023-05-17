/**
 * Sends data collected in contact form to email after the submit button
 * Code written with the help of the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 * and with the help of the videotuttorial https://youtu.be/5EZsRnJpUNU  
*/

function sendMail() {
    //prevent standart form action
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //binding form elements to properties emailjs
    var params = {
        from_name : document.getElementById('yname').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    };
    //function for sending users messages from feedback form
    emailjs.send('service_atmswmr', 'template_vlu0u11', params).then(function (res) {
        alert("Success!" + res.status);
    });
}

