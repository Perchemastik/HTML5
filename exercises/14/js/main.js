$(document).ready(function(){
	$('p').click(function(){
		$(this).hide();
	})
})


class Person{
	constructor(name,canDance){
		this.name = name;
		this.canDance = canDance;
		this.speak = function(name="john",canDance=false){
			console.log(`hello, my name is ${this.name} and people say I can dance thats ${this.canDance}`)
		}
	}
}

let davidObj = new Person('David', true)
let wadeObj = new Person('Wade', false)

davidObj.speak()
wadeObj.speak()