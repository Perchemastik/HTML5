console.log("connection stablished");
let all_p= document.getElementsByTagName("p");
for(i=1;i<=(all_p.length);i+=1){
	if(i===5){
		continue;
		// break;
	}
	all_p[i-1].innerHTML = "Number "+ i.toString();
}

function function_name () {
	// body... 
	// document.getElementsByTagName("h2")[0].innerHTML="waazzzaaa";
	document.getElementsByTagName("h2")[0].classList.toggle("text-danger");
}

function myfunction() {
	document.getElementsByClassName("formInputs")[0].style.color = "blue";
}

function myanotherfunction() {
	document.getElementsByClassName("formInputs")[1].style.color = "orange";
}
