var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	var orderTotal = 0.0;
	document.getElementById("espresso").onclick = function() {
		document.getElementById("order").innerHTML += ("<br>$1.95 - Espresso - Delicios espresso. Wanna try it?")
		orderTotal += 1.95
		document.getElementById("total").innerHTML = "<em>Total: $" + orderTotal.toFixed(2) + "</em>";
	}

	document.getElementById("cappuccino").onclick = function() {
		document.getElementById("order").innerHTML += ("<br>$3.45 - Cappuccino - Delicious cappuccino!")
		orderTotal += 3.45
		document.getElementById("total").innerHTML = "<em>Total: $" + orderTotal.toFixed(2) + "</em>";
	}
	

	//I had a little bit of extra time so I implemeted the clear button
	document.getElementById("clear_order").onclick = function() {
		document.getElementById("order").innerHTML = "";
		document.getElementById("total").innerHTML = "";
		orderTotal = 0.0;
	}
	
		
}; // end onload