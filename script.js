//your JS code here. If required
let fn = document.getElementById("fname");
let ln = document.getElementById("lname");
let pn = document.getElementById("pnum");
let em = document.getElementById("email");
let btn = document.getElementById("button");
btn.addEventListener("click", function(event) {
	event.preventDefault();
	alert("First Name: " + fn.value + 
          "\nLast Name: " + ln.value + 
          "\nPhone Number: " + pn.value + 
          "\nEmail ID: " + em.value);
)
});