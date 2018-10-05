var n1 = prompt("Введите первое число") ;
var sign = prompt("Введите знак" );
var n2  = prompt("Введите второе число") ;

var n = Number(n)

  switch(sign){

         case "+":
                 n = n1 + n2;
                 alert(n);
                 break;

         case "-":
                 n = n1 - n2;
                 alert(n);
                 break;

         case "*":
                 n = n1 * n2;
                 alert(n);
                 break;

         case "/":
                 n = n1/n2;
                 alert(n);
                 break;

         case "%":
                 n = n1%n2;
                 alert(n);
                 break;                         

         default:
                alert("not a sign");

  }