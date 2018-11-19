console.log('connection');
let aDomObj = document.getElementById('test');
let aDomObj2 = document.getElementById('test2');
let projNum = document.getElementById('demo');

aDomObj.addEventListener('dblclick',addSomeText);

function addSomeText(){
	// setTimeout(function(){
	// 	aDomObj.innerHTML = 'this will apear after 5 seconds';
	// },5000);
	setInterval(function(){
		console.log('set interval function')
	},2000);
}

let t = 0;
let myVar = setInterval(function(){
	startCounting();
},1000);

function startCounting(){
	aDomObj2.innerHTML = t+=1;
	if(t===10){
		clearInterval(myVar);
	}
}


let projectCounter = (function(){
	let counter = 0;
	return function(){
		counter += 1;
		return counter;
	}
}());
	
let projVar = setInterval(function(){
	let projects = projectCounter();
	if(projects>100){
		clearInterval(projVar);
	} else {
		projNum.innerHTML = projects;
	}
},35);