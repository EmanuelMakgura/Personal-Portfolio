let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}   
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_d45he6u","template_c29z61m",parms)
    .then(() => alert("✅ Your message has been sent successfully!"))
    .catch(error => {
        console.error("Error sending email:", error);
        alert("❌ There was a problem sending your message. Please try again later.");
    });
}
