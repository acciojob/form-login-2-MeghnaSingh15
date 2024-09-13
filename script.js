//your JS code here. If required
let btn = document.getElementById("button");

btn.addEventListener("click", function(event) {
    event.preventDefault();

    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let pn = document.getElementById("pnum").value;
    let em = document.getElementById("email").value;
    
    alert("First Name: " + fn + 
          "Last Name: " + ln + 
          "Phone Number: " + pn + 
          "Email ID: " + em);
});