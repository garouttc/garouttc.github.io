function submitLoginForm()
{  
  // Get form values
  var username = document.getElementById("login-form").elements["username"].value;
  var password = document.getElementById("login-form").elements["password"].value;
  
  // Show the searching, finding, and view pet profiles options
  document.getElementById("jdiv").innerHTML = '<h1>UNLEASHED PET FINDER: </h1>\n<h3>Please choose option</h3>\n<div class="col-sm-12" id="jumbotron-content">\n<a id="optionButton" class="btn btn-primary btn btn-lg" href="/search.html" role="button">SEARCH FOR LOST PET</a>\n<a id="optionButton" class="btn btn-primary btn btn-lg" href="/report-found.html" role="button">REPORT FOUND PET</a>]\n<a id="optionButton" class="btn btn-primary btn btn-lg" href="/pet-profiles.html" role="button">MY PET PROFILES</a>';
  
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
 
}

window.onload = function()
{
  // First check if the browser supports session storage
  if (typeof(Storage) == "undefined")
  {
    // Redirect to error page
    window.location = "https://garouttc.github.io/error.html";
  }

  // Check if a user is currently logged in
  // If a user is logged in...
  if (sessionStorage.getItem("username"))
  {
    // Show the searching, finding, and view pet profiles options
    document.getElementById("jdiv").innerHTML = '<h1>UNLEASHED PET FINDER: </h1>\n<h3>Please choose option</h3>\n<div class="col-sm-12" id="jumbotron-content">\n<button id="btn_download"class="btn btn-primary btn btn-lg">Search for Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/search.html");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">Report a Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/report-found.html");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">My Pet Profile</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/pet-profiles.html");})</script>\n</div>\n<br/>';
    
  }
  // If a user is not logged in
  else
  {
    // Hide navbar options that shouldn't be accessed from users who are not logged in
    var liNodes = document.getElementById("bs-navbar-collapse-main").getElementsByTagName("li");
    var i;
    for (i = 1; i < liNodes.length; i++)
    {
      liNodes[i].style.display = 'none';
    }
    // Show login prompt
    document.getElementById("jdiv").innerHTML = '<h1>UNLEASHED PET FINDER</h1>\n<form id="login-form">\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input id="submit" type="button" name="submit" value="Submit" onclick="submitLoginForm()">\n</form>';

  }
}
