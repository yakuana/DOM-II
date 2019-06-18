// Your code goes here

// Function skeleton to remove changes after 3 seconds (3000 milliseconds) 
/** 
setTimeout(function() {
  }, 3000);
*/


// Prevents nav [navigation] from updating page (# following website link does not show after a click)
const navigation = document.querySelector(".nav"); 
navigation.addEventListener("click", (event) => {
    event.preventDefault();
})

// List of images 
const images = document.querySelectorAll("img"); 

// First image [bus image], mouseover 
images[0].addEventListener("mouseover", (event) => {

    event.preventDefault(); 
    
    // creates gold border 
    event.target.style.border = "2px solid gold";

    // removes gold border 
    setTimeout(function() {
        event.target.style.border = "none";
    }, 3000);

})

// Second Image [map image], drag 
images[1].addEventListener("drag", (event) => {

    event.preventDefault(); 

    // creates red border 
    event.target.style.border = "4px solid red";

    // removes red border 
    setTimeout(function() {
        event.target.style.border = "none";
    }, 3000);
})

// Copyright text, double click 
const copyright = document.querySelector("footer p")
copyright.addEventListener("dblclick", (event) => {

    event.preventDefault(); 
    console.log("yay");

    // creates orange border 
    event.target.style.border = "4px dotted orange";

    // removes orange border 
    setTimeout(function() {
        event.target.style.border = "none";
    }, 3000);
})