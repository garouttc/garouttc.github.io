function submitLoginForm()
{

    // Get form values
    var username = document.getElementById("login-form").elements["username"].value;
    var password = document.getElementById("login-form").elements["password"].value;

    // Remove the login div
    var div = document.getElementById("login-div");
    var jcontainer = document.getElementById("jcontainer");
    jcontainer.removeChild(div);

    // Show the searching, finding, and view pet profiles options
    document.getElementById("jdiv").style.display = "inline";

    // Show navbar options again
    // Hide navbar options that shouldn't be accessed from users who are not logged in
    var liNodes = document.getElementById("bs-navbar-collapse-main").getElementsByTagName("li");
    var i;
    for (i = 1; i < liNodes.length; i++)
    {
      liNodes[i].style.display = 'block';
    }



    // Set sessionStorage values to simulate login
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    
    // Create an empty JSON object and store it in sessionStorage
    // This object acts as an array of JSON objects, each one containing pet dataa 
    var pets = [{"name": "Test Doggo", "species": "Canis lupus familiaris", "gender": "male", "breed": "Golden Retriever", "color": "Golden"}];
    sessionStorage.setItem("pets", JSON.stringify(pets));
    
}

function login()
{
  // First check if the browser supports session storage
  if (typeof(Storage) == "undefined")
  {
    // Redirect to error page
    window.location = "https://garouttc.github.io/error.html";
  }

  // If a user is not logged in
  if (!sessionStorage.getItem("username"))
  {
    // Hide navbar options that shouldn't be accessed from users who are not logged in
    var liNodes = document.getElementById("bs-navbar-collapse-main").getElementsByTagName("li");
    var i;
    for (i = 1; i < liNodes.length; i++)
    {
      liNodes[i].style.display = 'none';
    }
    
    //document.getElementById("jdiv").innerHTML = '<h1>UNLEASHED PET FINDER</h1>\n<form id="login-form">\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input id="submit" type="button" name="submit" value="Submit" onclick="submitLoginForm()">\n</form>';
    
    // Hide current jumbotron content
    document.getElementById("jdiv").style.display="none";
    
    // Create a new div with login prompt and attach to jumbotron
    var div = document.createElement("div");
    div.className = "jumbotron";
    div.id = "login-div";
    
    div.innerHTML = '<h1>UNLEASHED PET FINDER</h1>\n<form id="login-form">\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input id="submit" type="button" name="submit" value="Submit" onclick="submitLoginForm()">\n</form>';
    var jcontainer = document.getElementById("jcontainer");
    jcontainer.insertBefore(div, jcontainer.childNodes[0]);
  }
}

document.addEventListener("DOMContentLoaded", login());
