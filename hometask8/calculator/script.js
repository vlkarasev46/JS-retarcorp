var mr= document.getElementById("memory");
var mrP= document.getElementById("memory+");
var mrM= document.getElementById("memory-");
var td= document.getElementsByClassName("none");
var input= document.getElementById("input");
var output= document.getElementById("output");
var eq= document.getElementById("=");
var strMemory="";
var str="";
var apperator="";
var app= document.getElementsByClassName("aper");
var act= document.getElementById("act");

var res= function(){
	switch(apperator){
		case "+":
			output.innerText= Number(output.innerText)+Number(input.innerText);
			break;
		case "-":
			output.innerText= Number(output.innerText)-Number(input.innerText);
			break;
		case "*":
			output.innerText= Number(output.innerText)*Number(input.innerText);
			break;
		case "/":
			output.innerText= Number(output.innerText)/Number(input.innerText);
			break;
		default:
			break;
	}
}

mr.addEventListener("click", function(){
	strMemory= output.innerText;
});
mrM.addEventListener("click", function(){
	output.innerText= Number(output.innerText)-Number(strMemory);
	input.innerText="";
});
mrP.addEventListener("click", function(){
	output.innerText= Number(output.innerText)+Number(strMemory);
	input.innerText="";
});
for( let i=0; i<10; i++){
	td[i].addEventListener("click", function(){
		input.innerText+= this.innerText;
})
}

for( let i=0; i<4; i++){
	app[i].addEventListener("click", function(){
		if(apperator == ""){
			apperator= this.innerText;
			act.innerText= apperator;
			output.innerText= input.innerText;
			input.innerText= "";
		}
		else{
			if(input.innerText!="")
			res();
			apperator= this.innerText;
			act.innerText= apperator;
			input.innerText= "";
		}
	})
}

eq.addEventListener("click", function(){
	if(input.innerText!="")
	res();
})







