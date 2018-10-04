var today = new Date();

var str = '';
str += 59 - today.getMinutes() + (23 - today.getHours())*60;;
alert(str)