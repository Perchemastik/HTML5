console.log("connection established")
function addJS(){
	header=document.getElementById("header1").innerHTML.split("+")
	if(header.length>1){
		document.getElementById("header1").innerHTML = header[0]
	} else {
		document.getElementById("header1").innerHTML += " + JS"
	}
}

header2=document.getElementsByClassName("header2")
for(i=0;i<=(header2.length-1);i++){
	// alert(i)
	alert(header2[i].innerHTML)
}