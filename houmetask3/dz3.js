var today = new Date();

var str = '';
str += 23 - today.getHours();
str += ':' ;
str += 59 - today.getMinutes();
alert(str)