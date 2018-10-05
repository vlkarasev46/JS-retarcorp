var str = "fh hf utb utghut jf urh rghr rhr";

var conter = 0;
for(var i = 0; i< str.length; i++ ){
  if(str[i] === " "){
	conter++;
}
}
conter++;

alert(conter);