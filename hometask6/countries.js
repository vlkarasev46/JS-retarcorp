var Country = {
	countryList:[{
	count:"Canada",
	flag: "Red",
	code: 54,
	population: 60000000,
	
},{

	count:"Russia",
	flag: "Red",
	code: 5,
	population: 150000000,
	
},

{
  
	count:"USA",
	flag: "stars",
	code: 4,
	population: 30000000,
	
},

{
	
	count:"Belarus",
	flag: "Red-green",
	code: 375,
	population: 1000000,
	
},

{
	
	count:"England",
	flag: "white-Red",
	code: 1,
	population: 65000000,
	
},

{
	
	count:"Brazil",
	flag: "green",
	code: 32,
	population: 180000000,
	
},

{
	
	count:"China",
	flag: "full Red",
	code: 2,
	population: 1500000000,
	
},


{
	
	count:"Egypt",
	flag: "black",
	code: 8,
	population: 12490000,
	
},
{

	count:"Germany",
	flag: "yellow",
	code: 58,
	population: 70000000,
	
},
{
	
	count:"France",
	flag: "Blue",
	code: 54,
	population: 60000000,
	
},
{
	
	count:"Mexico",
	flag: "White",
	code: 9,
	population: 32100000,
	
},

{

	count:"Latvia",
	flag: "Brown",
	code: 10,
	population: 3000000,
	
}],
}
document.write("<ul>")
c = Country.countryList.map(el => el.count)
                       .forEach(function(elenents){
                       	document.write("<li>")
                       	document.write(elenents)
                       	document.write("</li>")
                       });
           document.write("</ul>")


