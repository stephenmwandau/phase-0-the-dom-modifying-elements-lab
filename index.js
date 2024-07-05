

// Remove the <main> element
document.getElementById("main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign an id of 'victory' to the new <h1> element
newHeader.id = "victory";

// Set the text of the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new <h1> element to the body or desired container
document.body.appendChild(newHeader);
