var illustration = document.getElementById("inpSubmit");
 var buttons = document.getElementsByName("answer");

for (var i = 0; i < buttons.length; i++)
    
buttons[i].onclick = function() {
	illustration.removeAttribute("style");	 
	illustration.removeAttribute("hidden");	
}