function youSaid(say){
	// grabs a reference to the paragraph with the id 'target'
	var target = document.getElementById("target");
	// updates its contents
	if(say.length > 0)
		target.innerHTML = "You said: " + say;
	else
		target.innerHTML = "You haven't said anything.";

	// keeps the page from refreshing
	return false;
}