let numberArray = [6,5,7,8,11,4,19,22,3,12,99,1,123];
document.getElementById("array").innerHTML = numberArray
function bublesortup(numberArray) {
	console.log(numberArray)
	let i;
	for(i = 0;i < numberArray.length; i += 1){
		let k;
		for(k = 0; k < numberArray.length-i; k += 1){
			if(numberArray[k] > numberArray[k+1]){
				let temp;
				temp = numberArray[k];
				numberArray[k] = numberArray[k+1];
				numberArray[k+1] = temp;
			}
		}
	}
	return numberArray;
}
function bublesortdown(numberArray) {
	console.log(numberArray)
	let i;
	for(i = 0;i < numberArray.length; i += 1){
		let k;
		for(k = 0; k < numberArray.length-i; k += 1){
			if(numberArray[k] < numberArray[k+1]){
				let temp;
				temp = numberArray[k];
				numberArray[k] = numberArray[k+1];
				numberArray[k+1] = temp;
			}
		}
	}
	return numberArray;
}
document.getElementById("up").innerHTML = `Bubble sort up => [${bublesortup(numberArray)}]`;
document.getElementById("down").innerHTML = `Bubble sort down => [${bublesortdown(numberArray)}]`;;
console.log('...')
console.log(numberArray)

function writeMyName () {
	name = prompt("Please enter your name", "Harry Potter")
	if(name==='Batman'){
		document.getElementById("name").innerHTML = `The dark knight Rises!`;
	} else if (name ==='Harry Potter') {
		document.getElementById("name").innerHTML = `a bit lazy... aren't you?`;
	} else if (name == "null" || name == "") {
		document.getElementById("name").innerHTML = `you don't want to participate?`;
	} else {
		document.getElementById("name").innerHTML = `Hello Human with name tag ${name}`;
	}

}
// function funAdd (a,b) {
// 	a = Number(document.getElementById("id_a").value);
// 	b = Number(document.getElementById("id_b").value);
// 	result = a + b ;
// 	document.getElementById("result").innerHTML = `the result is ${result}`;
// }

let funAdd = (a,b) => {
	a = Number(document.getElementById("id_a").value);
	b = Number(document.getElementById("id_b").value);
	result = a + b ;
	document.getElementById("result").innerHTML = `the result of a + b is ${result}`;
}

let funSub = (a,b) => {
	a = Number(document.getElementById("id_a").value);
	b = Number(document.getElementById("id_b").value);
	result = a - b ;
	document.getElementById("result").innerHTML = `the result of a-b is ${result}`;
}
let funMult = (a,b) => {
	a = Number(document.getElementById("id_a").value);
	b = Number(document.getElementById("id_b").value);
	result = a * b ;
	document.getElementById("result").innerHTML = `the result of a*b is ${result}`;
}
let funDiv = (a,b) => {
	a = Number(document.getElementById("id_a").value);
	b = Number(document.getElementById("id_b").value);
	result = a / b ;
	document.getElementById("result").innerHTML = `the result is ${result}`;
}
function changeColor () {
	let mylist = document.getElementsByClassName("listItems");
	let i;
	for (i = 0; i < mylist.length; i+=1) {
		mylist[i].style.color = document.getElementById("html5colorpicker").value;
	}
}

let funAdd2 = function(){
	let result = 0;
	let i;
	let arg = arguments.length;
	for(i = 0 ; i < arg ; i += 1){
		result += arguments[i];
	}
	return result;
}
