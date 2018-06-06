window.onload = function()
{
  // Say hello to the logged-in user
  var helloString = "Hello ";
  helloString = helloString.concat(sessionStorage.getItem("username"));
  helloString = helloString.concat("! Here are your pet profiles:");
  var text = document.createTextNode(helloString);
  document.getElementById("hello-user").appendChild(text);

  // Check the user's pet profile JSON object and display any pet profiles they have 

  // Add button for creating a new pet profile 
}
