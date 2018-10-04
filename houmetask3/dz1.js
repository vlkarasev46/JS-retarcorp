
var str = prompt("Enter string");
 var l = str.length;
 

    var op = 0;
 	var cl = 0;
 	

 	for(var i=0;i<l;i++){
 		
 		if(str.charAt(i)=="("){
 			op++;
 		}

 		else if(str.charAt(i)==")"){
 			cl++;
 		}


 		if(cl>op){
 			alert("Скобки расставлены неправильно");
 			
 			break;
 		}

 		if(cl==op && i==l-1){
 			alert("Скобки раставлены правильно!");
 			
 		}
 		else if(close<open&&i==l-1){
 			alert("Скобки расставлены неправильно");
 			
 		}

 	}