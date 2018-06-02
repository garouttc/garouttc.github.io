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
    
    // Clear the navbar options for everything except homepage
    document.getElementById("bs-navbar-collapse-main").innerHTML = '<li><a href="/index.html">Home</a></li>';
  }
  // If a user is logged in
  else
  {
    // Show searching, finding, and profile options in jumbotron
    document.getElementById("jumbotron-content").innerHTML = '<form>\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input type="submit" action="index.html" method="post" value="Submit">\n</form>';
    
    // As well as in the navbar
    document.getElementById("bs-navbar-collapse-main").innerHTML = '<li><a href="/index.html">Home</a></li>\n<li><a href="/search.html">Search for a Pet</a></li>\n<li><a href="/report-found.html">Report a Lost Pet</a></li>\n<li><a href="/pet-profiles.html">My Profile</a></li>\n<li><a href="/pet-profiles.html">My Pet Profiles</a></li>';
  }
}
