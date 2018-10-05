var n=prompt("input n");
n=Number(n);

var a = 0;
var b = 1;
var num;
for (var i = 1; i<=n; i++){
	if(n==1)
		{
			num = 1
		}

	else{
	     num = a + b
	     a = b;
	     b = num;	
	} 
		
alert(a);
}