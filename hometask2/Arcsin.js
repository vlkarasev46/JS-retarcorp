var x = prompt("Введите х  (|x|<1)");
var N = prompt("Введите N  (N<80)");

var a = x;
	for(var i=1;i<N;i++){
		
		a+= factorial(2*i) / Math.pow(4,i) / Math.pow(factorial(i),2) / (2*i+1)  * Math.pow(x, (2*i+1));
	}
	a*=180/3.141592654;
	alert(a);


function factorial(n){
	var fac=1;
	for(var j=1;j<n+1;j++){
		fac*=j;
	}
	
	return fac;
}