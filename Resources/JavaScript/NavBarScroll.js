/*
 * Make the nav bar go away slightly when u scroll down.
 * 
 */

var size = document.getElementByClass("content-box").scrollTop;

window.onscroll = function() {

	var nav-pane = document.getElementById("main-header");

	var newSize = document.getElementByClass("content-box").scrollTop;

	if (newSize < size) {
		nav-pane.style.padding = "1.6%";

	} else {    
		nav-pane.style.padding = "2.3%";

	}


}