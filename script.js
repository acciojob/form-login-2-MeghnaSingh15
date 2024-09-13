//your JS code here. If required.

let fn = document.getElementById("fname");
let ln = document.getElementById("lname");
let pn = document.getElementById("pnum");
let em = document.getElementById("email");
let btn = document.getElementById("button");
btn.addEventListener("click", function() {
	alert(First Name: fn.value
		Last Name: ln.value
			Phone Number: pn.value
				Email ID: em.value)
});