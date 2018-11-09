console.log("connection stablished");
let all_p= document.getElementsByTagName("p");
for(i=1;i<=(all_p.length);i+=1){
	if(i===5){
		continue;
		// break;
	}
	all_p[i-1].innerHTML = "Number "+ i.toString();
}