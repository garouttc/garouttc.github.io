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
  var pets = JSON.parse(sessionStorage.getItem("pets"))
      console.log(pets[0].name);
        console.log(pets[0].breed);
        console.log(pets[0].species);
  var pet;
  
  // Display pet profiles
  var i;
  for (i = 0; i < pets.length; i++)
  {
    pet = pets[i];
    // Create a div for each pet and attach it to the jumbotron
    var div = document.createElement("div");
    div.className = "col-sm-12";
    var id = "jumbotron-content";
    id = id.concat(i);
    div.id = id;
    document.getElementById("jcontainer").appendChild(div);

    
    // Display pet name as a header for profile
    var nameHeader = document.createElement("h3");
    var text = "Pet: ";
    text = text.concat(pet.name);
    nameHeader.appendChild(document.createTextNode(text));
    div.appendChild(nameHeader);
    
    // Then list its attributes
    // Species
    var list = document.createElement("ul");
    div.appendChild(list);
    var attr = document.createElement("li");
    attr.style.listStyleType = "none";
    var attrText = "Species: ";
    attrText = attrText.concat(pet.species);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Breed
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Breed: ";
    attrText = attrText.concat(pet.breed);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Gender
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Gender: ";
    attrText = attrText.concat(pet.gender);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
    // Gender
    attr = document.createElement("li");
    attr.style.listStyleType = "none";
    attrText = "Color: ";
    attrText = attrText.concat(pet.color);
    attr.appendChild(document.createTextNode(attrText));
    list.appendChild(attr);
    
  }
  
  // Add button for creating a new pet profile 
}

document.addEventListener("DOMContentLoaded", displayPetProfiles());
