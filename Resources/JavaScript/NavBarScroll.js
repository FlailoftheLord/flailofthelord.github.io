/*
 * Make the nav bar go away slightly when u scroll down.
 * 
 */

window.onwheel = function() {
	scrollFunction()
	
};

var navlink = document.getElementById("nav-bar");
var navLinks = document.getElementByClass("nav-links");

var content = document.getElementByClass("content-box");

function scrollFunction() {
  if (content.style.margin-top < content.style.margin-top * 1.2) {
	  navlink.style.display = "hidden";
	  navLinks.style.display = "hidden";
    
  } else {    
	  navLinks.style.display = "hidden";
      navlink.style.display = "inline";
    
  }
  
}