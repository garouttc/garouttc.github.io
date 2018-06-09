document.getElementById("redirect").addEventListener("click", myAlert);

function myAlert() {
    if (window.confirm("Is this your pet?")) {
        alert("Redirecting you to contact the pet finder!");
        window.location = '/contact.html';
    }
 }
