/*
 * Make the nav bar go away slightly when u scroll down.
 * 
 */

var content = document.getElementByClass("content-box");
var size = content.scrollTop;

window.onscroll = function() {

	var nav-pane = document.getElementById("main-header");

	var newSize = content.scrollTop;

	if (newSize < size) {
		nav-pane.style.padding = "1.6%";

	} else {    
		nav-pane.style.padding = "2.3%";

	}


}