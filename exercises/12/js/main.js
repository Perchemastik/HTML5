console.log('connection')

let change = (obj) => {
	obj.style.backgroundColor = 'tomato'
}

let buttonClickMe = document.getElementById("actionButton");
// buttonClickMe.onclick = () => {
// 	buttonClickMe.style.backgroundColor = 'tomato'
// }

// buttonClickMe.addEventListener('click', function(){
// 	let para = document.createElement("p");
// 	let txt = document.createTextNode("you clicked with addEventListener");
// 	para.appendChild(txt);
// 	element = document.getElementsByTagName('body')[0];
// 	element.appendChild(para);
// 	buttonClickMe.style.backgroundColor = 'tomato';
// });

// buttonClickMe.addEventListener('click', myfun);

// function myfun(){
// 	buttonClickMe.style.backgroundColor = 'tomato';
// }
// let myfun = () => {
// 	buttonClickMe.style.backgroundColor = 'tomato';
// }

buttonClickMe.addEventListener('click', customfun);

function customfun(event){
	console.log(event.clientX , event.clientY )
}

let myObject = {
	variable1: "new variable",
	thing: "didn't like the movie",
	eat: function(food){
		if(food=== "tacos"){
			console.log('tacooooossss!, Om Nom Nom Nom!!!!')
		} else{
		console.log('I only eat tacos...')
		}
	}
}