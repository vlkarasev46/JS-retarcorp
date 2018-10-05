console.log("Hello, world!");

var a=prompt("input a");
a=Number(a);
var b = prompt("input b");
b=Number(b);
var c=prompt("input c");
c=Number(c);


var x = a < b ? a : b;
var y = c < a ? c : x;
var z = x < y ? x : y;
alert(z);








/*var n=prompt("enter n");
var sum=0;
n=Number(n);

for (var i=0; i<n; i++){
     
     var num = prompt(`Enter x${i}`);
     sum+=Number(num);
}
alert(`Avg = ${sum/n}`);
*/













