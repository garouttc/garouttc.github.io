function displayPetProfiles()
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
    // Create a div for each pet and attach it to the jumbotron
    var div = document.createElement("div");
    div.className = "col-sm-12";
    var id = "jumbotron-content";
    id = id.concat(i);
    div.id = id;
    document.getElementById("jdiv").appendChild(div);
    var pet = pets[i];
    
    // Display pet name as a header for profile
    var nameHeader = document.createElement("h3");
    var text = "Pet: ";
    text.concat(pet.name);
    nameHeader.appendChild(document.createTextNode(text));
    div.appendChild(nameHeader);
    
    // Then list its attributes
    // Species
    var list = document.createElement("ul");
    div.appendChild(list);
    var attr = document.createElement("li");
    attr.style.listStyleType = "none";
    var attrText = "Species: ";
    attrText.concat(pet.species);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Breed
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Breed: ";
    attrText.concat(pet.breed);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Gender
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Gender: ";
    attrText.concat(pet.gender);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Gender
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Color: ";
    attrText.concat(pet.color);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
  }
  
  // Add button for creating a new pet profile 
}

document.addEventListener("DOMContentLoaded", displayPetProfiles());
