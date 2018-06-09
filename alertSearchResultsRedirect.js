document.getElementById("redirect").addEventListener("click", myAlert);

function myAlert() {
    if (window.confirm("Is this your pet?")) {
        alert("Redirecting you to contact the pet finder!");
        window.location = '/contact.html';
    }
 }

function displayPetProfiles()
{
  if (!sessionStorage.getItem("username"))
  {
    window.location = "https://garouttc.github.io/index.html";
  }
  
  // Say hello to the logged-in user
  var helloString = "Hello ";
  helloString = helloString.concat(sessionStorage.getItem("username"));
  helloString = helloString.concat("! Here is the contact for the pet finder user, iLuvAnimalz.");
  var text = document.createTextNode(helloString);
  console.log(helloString);
  document.getElementById("hello-user").appendChild(text);
}

document.addEventListener("DOMContentLoaded", displayPetProfiles());
