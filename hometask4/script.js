var Bookkeeping = {
	employer:[{
	name:"Ivan",
	age: 43,
	department: "Cleaning",
	salary: 600,
	expierence: 20,
	print: function(){
		console.log(` ${this.name} - ${this.salary}`);
	}
},{

    name:"Vitek",
	age: 49,
	department: "Cleaning",
	salary: 7000,
	expierence: 80,
	print: function(){
		console.log(` ${this.name} - ${this.salary}`);
	}
},

{
   name:"Lena",
	age: 22,
	department: "Cleaning",
	salary: 120,
	expierence: 3,
	print: function(){
		console.log(` ${this.name} - ${this.salary}`);
	}
},

{
	name:"Vlados",
	age: 20,
	department: "Money",
	salary: 800,
	expierence: 180,
	print: function(){
		console.log(` ${this.name} - ${this.salary}`);
	
    }
},

{
	name:"Sima",
	age: 40,
	department: "Money",
	salary: 500,
	expierence: 140,
	print: function(){
		console.log(` ${this.name} - ${this.salary}`);
	}
}],

printAll: function(){
	for (var i in this.employer){
		 this.employer[i].print()
       } 

  }
}


Bookkeeping.printAll();

console.log(Bookkeeping.employer);


var b1 = Bookkeeping.employer.filter(el=> el.name)
                             .sort((a,b)=>a.salary>b.salary);
console.log(b1);


var b2 = Bookkeeping.employer.map(f=>f.salary)
                             .reduce((a,b)=>a+b)
console.log(b2);



var c1 =  Bookkeeping.employer.filter(f=>f.name)
                              .sort((a,b)=>b.salary-a.salary)[0];
console.log(c1);

var c2 =  Bookkeeping.employer.filter(f=>f.name)
                              .sort((a,b)=>a.salary-b.salary)[0];
console.log(c2);


var c3 = Bookkeeping.employer.map(f=>f.salary)
                             .reduce((a,b)=>a+b);
console.log(c3/5);


var d1 = Bookkeeping.employer.filter(el => el.department == "Cleaning")
                             .sort((a,b)=>a.salary-b.salary)[0];
console.log(d1);

var d2 = Bookkeeping.employer.filter(el => el.department == "Money")
                             .sort((a,b)=>a.salary-b.salary)[0];
console.log(d2);


var d3 = Bookkeeping.employer.filter(el => el.department == "Cleaning")
                             .sort((a,b)=> b.salary - a.salary)[0];
console.log(d3);

var d4 = Bookkeeping.employer.filter(el => el.department == "Money")
                             .sort((a,b)=> b.salary - a.salary)[0];
console.log(d4);

var d5 = Bookkeeping.employer.filter(el => el.department == "Cleaning")
                             .map(el => el.salary)
                             .reduce((a,b)=>a+b);
console.log(d5);

var d6 = Bookkeeping.employer.filter(el => el.department == "Money")
                             .map(el => el.salary)
                             .reduce((a,b)=>a+b);
console.log(d6);
console.log(d5/3);
console.log(d6/2);

var d7 = Bookkeeping.employer.filter(el => el.department == "Cleaning")
                             .map(el => el.name);
console.log(d7.length);                             

var d8 = Bookkeeping.employer.filter(el => el.department == "Money")
                             .map(el => el.name);
console.log(d8.length);                             

var d9 = Bookkeeping.employer.filter(el => el.department == "Cleaning")
                             .map(el => el.age)
                             .reduce((a,b)=>a+b);
console.log(d9/3); 

var d10 = Bookkeeping.employer.filter(el => el.department == "Money")
                              .map(el => el.age)
                              .reduce((a,b)=>a+b);
console.log(d10/2);      


var d11 = Bookkeeping.employer.filter(f => f.name)
                              .filter(el => el.department == "Cleaning")
                              .sort((a,b)=>b.expierence - a.expierence)[0];
console.log(d11);

var d12 = Bookkeeping.employer.filter(f => f.name)
                              .filter(el => el.department == "Money")
                              .sort((a,b)=>b.expierence - a.expierence)[0];
console.log(d12)  


