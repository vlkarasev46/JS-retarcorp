var Country = {
	countryList:[{
	count:"Canada",
	flag: "<img src = Flags/canada.jpg>",
	code: 54,
	population: 60000000,
	
},{

	count:"Russia",
	flag: "<img src = Flags/russia.jpg>",
	code: 5,
	population: 150000000,
	
},

{
  
	count:"USA",
	flag: "<img src = Flags/usa.jpg >",
	code: 4,
	population: 30000000,
	
},

{
	
	count:"Belarus",
	flag: "<img src = Flags/belarus.jpg>",
	code: 375,
	population: 1000000,
	
},

{
	
	count:"England",
	flag: "<img src = Flags/england.jpg>",
	code: 1,
	population: 65000000,
	
},

{
	
	count:"Brazil",
	flag: "<img src = Flags/brazil.jpg>",
	code: 32,
	population: 180000000,
	
},

{
	
	count:"China",
	flag: "<img src = Flags/china.jpg>",
	code: 2,
	population: 1500000000,
	
},


{
	
	count:"Egypt",
	flag: "<img src = Flags/egypt.jpg>",
	code: 8,
	population: 12490000,
	
},
{

	count:"Germany",
	flag: "<img src = Flags/germany.jpg>",
	code: 58,
	population: 70000000,
	
},
{
	
	count:"France",
	flag: "<img src = Flags/france.jpg >",
	code: 54,
	population: 60000000,
	
},
{
	
	count:"Mexico",
	flag: "<img src = Flags/mexico.jpg>",
	code: 9,
	population: 32100000,
	
},

{

	count:"Latvia",
	flag: "<img src = Flags/latvia.jpg>",
	code: 10,
	population: 3000000,
	
}],
}


document.write("<table border='1'>")
document.write("<tr>")
c = Country.countryList.map(el => el.count)
                       .forEach(function(elenents){
                       	document.write("<td>")
                       	document.write(elenents)
                       	document.write("</td>")
                       });
document.write("</tr>")

document.write("<tr>")
c = Country.countryList.map(el => el.flag)
                       .forEach(function(elenents){
                       	document.write("<td>")
                       	document.write(elenents)
                       	document.write("</td>")
                       });

document.write("</tr>")

document.write("<tr>")
c = Country.countryList.map(el => el.code)
                       .forEach(function(elenents){
                       	document.write("<td>")
                       	document.write(elenents)
                       	document.write("</td>")
                       });

document.write("</tr>")

document.write("<tr>")
c = Country.countryList.map(el => el.population)
                       .forEach(function(elenents){
                       	document.write("<td>")
                       	document.write(elenents)
                       	document.write("</td>")
                       });

document.write("</tr>")

document.write("</table>")


