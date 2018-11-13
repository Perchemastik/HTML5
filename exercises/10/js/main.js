numbersArray = [1,2,3,4,5,6,7,8,9]
document.getElementById("push").innerHTML = numbersArray
responses=[`did my momma whaaat!???`,`do not talk to me`,`what did you say?`,`you need som ass whoopin`,`I love you`, `do you really care?`,`close enough`];

function myfun(){
	event.preventDefault();
	if(document.getElementById("pushValue").value===""){
		document.getElementById("warning").innerHTML = responses[getRandomInt(responses.length)];
	} else {
			numbersArray.push(document.getElementById("pushValue").value)
			document.getElementById("push").innerHTML = numbersArray;
			document.getElementById("pushValue").value = "";
	}
}

function myfunPop(){
	event.preventDefault();
	numbersArray.pop();
	document.getElementById("push").innerHTML = numbersArray;
}

function myfunShit(){
	event.preventDefault();
	numbersArray.shift();
	document.getElementById("push").innerHTML = numbersArray;
}

function myfunUnShit(){
	event.preventDefault();
	if(document.getElementById("pushValue").value===""){
		document.getElementById("warning").innerHTML = responses[getRandomInt(responses.length)];
	} else {
		numbersArray.unshift(document.getElementById("pushValue").value)
		document.getElementById("push").innerHTML = numbersArray;
		document.getElementById("pushValue").value = "";
	}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let oddNumbers = [];
let counter = 0;

for(i=0;i<10;i+=1){
	// (i%2!==0)? oddNumbers.push(i):;
	console.log(i);
	if(i%2!==0){
		oddNumbers.push(i)
		console.log("Adding Odd Number...")
	}
	await sleep(200)
}
console.log(oddNumbers)