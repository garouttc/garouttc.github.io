
document.getElementById("redirect").addEventListener("click", myAlert);

function myAlert() {
    alert("Success! Retrieving search results now.");
    window.location = '/search-results.html';

}
