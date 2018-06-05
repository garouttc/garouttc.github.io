function logout() 
{
  // First check if the browser supports session storage
  // This step should be unnecessary since we handle this in checkLoginStatus...but I guess it can't hurt
  if (typeof(Storage) == "undefined")
  {
    // Redirect to error page
    window.location = "https://garouttc.github.io/error.html";
  }
  else
  {
    sessionStorage.clear();  
  }
}
