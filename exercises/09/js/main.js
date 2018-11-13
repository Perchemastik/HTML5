let tmnt = ["Leonardo", "Raphael", "Donatello", "Michalangelo"];
let userDetails = [];
userDetails[0] = prompt("what is your name?"	, "Bruce Wayne");
userDetails[1] = prompt("who are you?"	, "Batman");
userDetails[2] = prompt("What's your ride?"	, "BatMovil");
function myFunction(){
		// document.getElementsByClassName("demo")[0].innerHTML = userDetails[0] + " " + userDetails[1] + " " + userDetails[2];
		document.getElementsByClassName("demo")[0].innerHTML = `Hello ${userDetails[0]}, you are ${userDetails[1]} and your ${userDetails[2]} is a nice ride!!!`;
}

function myfun(event){
	event.preventDefault();
	let userInfo = [];
	userInfo[0] = document.getElementById('nameInput').value;
	userInfo[1] = document.getElementById('lastNameInput').value;
	userInfo[2] = document.getElementById('emailInput').value;
	document.getElementById('inputSummary').innerHTML = `Hello ${userInfo[0]} ${userInfo[1]}, thank you for filling out and submitting the form. you will receive an email to the provided email: <h4>${userInfo[3]}</h4>`;
}

 // function myFunction(event){
 //  event.preventDefault();
 // let name = document.getElementById('nameinput').value;
 // let lastName = document.getElementById('lastNameInput').value;
 // let emailInput = document.getElementById('emailInput').value;


 // document.getElementById('inputSummary').innerHTML = `Hello ${name} ${lastName}, thank you for filling out and submitting the form. You will receive an email to the provided email: <h4>${emailInput}</h4>`;
 // }