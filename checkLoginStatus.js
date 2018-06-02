function getLoginVars(event)
{
  // Stop form submission, since we can't use PHP :(
  event.preventDefault(); 
  
  var username = document.getElementById("login-form").elements["username"];
  var password = document.getElementById("login-form").elements["password"];
  
  // Show the searching, finding, and view pet profiles options
  document.getElementById("jumbotron-content").innerHTML = '<button id="btn_download"class="btn btn-primary btn btn-lg">Search for Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">Report a Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">My Pet Profile</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>';
  
  // Show navbar options again
  document.getElementById("bs-navbar-collapse-main").style.display = 'none';
  
  return [username, password];
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
    document.getElementById("jumbotron-content").innerHTML = '<button id="btn_download"class="btn btn-primary btn btn-lg">Search for Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">Report a Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">My Pet Profile</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>';
    
  }
  // If a user is not logged in
  else
  {
    // Show login prompt
    document.getElementById("jumbotron-content").innerHTML = '<form id="login-form">\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input type="submit" action="index.html" method="post" value="Submit">\n</form>';
    
    // Hide navbar options that shouldn't be accessed from users who are not logged in
    var liNodes = document.getElementById("bs-navbar-collapse-main").getElementsByTagName("li");
    for (var i = 1; i < liNodes.length; i++)
    {
      liNodes[i].style.display = 'none';
    }
    
    // Github pages only allows modification of client side data, and hence we can't use PHP to get POST variables from login form
    // So, create an event listener for submitting the form that grabs input variables, stores them, and creates sessionStorage
    var loginDetails;
   // document.getElementById("login-form").addEventListener("submit", loginDetails = getLoginVars(event));

  }
}
