window.onload = function()
{
  // Say hello to the logged-in user
  var helloString = "Hello ";
  helloString = helloString.concat(sessionStorage.getItem("username"));
  helloString = helloString.concat("! Here are your pet profiles.");
  var text = document.createTextNode(helloString);
  console.log(helloString);
  document.getElementById("hello-user").appendChild(text);

  // Get the user's JSON pet list from storage
  var petsStorage = sessionStorage.getItem("pets");
  if (petsStorage)
  {
    pets = JSON.parse(petsStorage);
  }
  
  // Display pet profiles
  for (i = 0; i < pets.length; i++)
  {
    var pet = pets[i];
    for (var attribute in pet)
    {
      
    }
  }
  
  // Add button for creating a new pet profile 
}
