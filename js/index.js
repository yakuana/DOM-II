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
    event.target.style.border = "4px dashed red";

    // removes red border 
    setTimeout(function() {
        event.target.style.border = "none";
    }, 3000);
})

// Copyright text, double click 
const copyright = document.querySelector("footer p")
copyright.addEventListener("dblclick", (event) => {

    event.preventDefault(); 

    // creates orange border 
    event.target.style.border = "4px solid orange";

    // removes orange border 
    setTimeout(function() {
        event.target.style.border = "none";
    }, 3000);
})

// Window scroll greater than 1000 pixels in the y-axis, scroll
window.addEventListener("scroll", () => {
   
    // scroll down 1000 pixels 
    if (window.scrollY > 1000) {

        // sets background color to lavender 
        document.querySelector("body").style.background = "lavender"; 

        // reverts background color to white 
        setTimeout(function() {
            document.querySelector("body").style.background = "#FFFFFF"; 
        }, 3000);
    }
})

// Window loaded, load
window.addEventListener('load', () => {

    // prints in console 
    console.log('Welcome to the fun bus Website!');
});


// List of all h2 elements
const header2 = document.querySelectorAll("h2"); 


// Click on webpage to activate, then press any key, keydown 
document.addEventListener("keydown", (event) => {
    
    // adds the letter to the end of the first h2 element in header2 
    header2[0].textContent += ` ${event.key}`;
})


// List of all p elements 
const pElements = document.querySelectorAll("p"); 


// Second p element, wheel 
pElements[1].addEventListener("wheel", () => {

    // increases the fontsize of second p element 
    pElements[1].style.fontSize = "3rem"; 

    // reverts the fontsize after 2 seconds 
    setTimeout(function() {
        pElements[1].style.fontSize = "1.5rem"; 
    }, 2000); 
})

