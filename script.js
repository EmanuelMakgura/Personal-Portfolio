let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}   
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("✅ Your message has been sent successfully!");

    this.reset();
});
