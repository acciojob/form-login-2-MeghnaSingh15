//your JS code here. If required
let fn = document.getElementById("fname");
let ln = document.getElementById("lname");
let pn = document.getElementById("pnum");
let em = document.getElementById("email");
let btn = document.getElementById("button");
btn.addEventListener("click", function() {
	alert("First Name: " + fn + 
          "\nLast Name: " + ln + 
          "\nPhone Number: " + pn + 
          "\nEmail ID: " + em);
)
});