var harmonic = function(...arguments){
	return arguments.length/ arguments.reduce((prev,curr)=>prev + 1/curr);
}


var median = function(...arguments){
	     arguments.sort((a,b)=>a-b)
         return  arguments.length%2!=0 ? arguments.slice(arguments.length/2,1+arguments.length) : alert("Not median");
}


var dispersion = function(...arguments){
      
    var sum1 = arguments.reduce((prev,curr)=>prev+curr)   
	var mathExp = sum1/arguments.length;
	return (arguments.reduce((prev,curr)=>prev+(mathExp - curr)**2,0))/arguments.length;
} 

var string = function(...arguments) {
	var str = "";
	arguments.forEach(el=>{
		str+= String.fromCharCode(el);});
    return str;	
}




console.log(harmonic(1,5,6,3));
console.log(median(12,34,56,78,99));
console.log(dispersion(1,2,3,4,5,6,7,8));
console.log(string(656,33,23));