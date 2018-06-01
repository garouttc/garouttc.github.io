// First check if the browser supports session storage
if (typeof(Storage) == "undefined")
{
  // Redirect to error page
  window.location = "https://garouttc.github.io/error.html";
}

// Check if a user is currently logged in
// If a user is logged in show the searching, finding, and view pet profiles options
if (sessionStorage.getItem("username"))
{
  document.getElementById("jumbotron-content").innerHTML = '<button id="btn_download"class="btn btn-primary btn btn-lg">Search for Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">Report a Lost Pet</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>\n<button id="btn_download"class="btn btn-primary btn btn-lg">My Pet Profile</button>\n<script type="text/javascript">$("#btn_download").click(function(){window.open("/download");})</script>';
}
// Otherwise, provide a login prompt
else
{
  document.getElementById("jumbotron-content").innerHTML = '<form>\nUsername <input type="text" name="username">\nPassword <input type="password" name="password">\n<input type="submit" action="index.html" method="post" value="Submit">\n</form>';
}
