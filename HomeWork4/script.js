var names = ["Vlados","Sima","Alex","Gleb","Vika"];
var cities = ["Minsk", "Moscow", "Brest", "Gomel","Grogno"];

var people = [];

var a1 = 15;
var a2 = 50;

var getRand = function(a,b) {
	return Math.round(Math.random()*(b-a)+a);
}


var  n = names.length-1;
for(var i = 0;i<n;i++){

	people.push({
		name: names[getRand(0, n)],
		city: cities[getRand(0, cities.length-1)],
		age:  getRand(a1,a2),
	});

}

people.sort((a,b)=>b.age - a.age);


people.forEach(el=> {
	console.log(el.name," ", el.city," ",el.age);
})