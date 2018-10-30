var Company = {
	employer:[{
	name:"Ivan",
	age: 43,
	department: "Cleaning",
	salary: 600,
	
},{

    name:"Vitek",
	age: 49,
	department: "Cleaning",
	salary: 7000,
	
	
},

{
   name:"Lena",
	age: 22,
	department: "Cleaning",
	salary: 120,
	
},

{
	name:"Vlados",
	age: 20,
	department: "Money",
	salary: 800,
	
},

{
	name:"Sima",
	age: 40,
	department: "Money",
	salary: 500,
	expierence: 140,
	
}],


    Info: function() {

    function  MaxSalofCleaning(){
                    
            return
            	
           console.log(	`${Company.employer.filter(el => el.department == "Cleaning")
                                .sort((a,b)=>b.salary - a.salary)[0]}`)

     }
    function MaxSalofMoney(){
        return
            	Company.employer.filter(el => el.department == "Money")
            	                .sort((a,b)=>b.salary - a.salary)[0]; 

            
    }

    function AvgSalofCleaning(){

         return
         	Company.employer.filter(el => el.department == "Cleaning")
         	                .reduce((prev,curr)=>(prev+curr.salary)/(curr.length));

         

    }


    function AvgSalofMoney(){

         return

         	Company.employer.filter(el => el.department == "Money")
         	                .reduce((prev,curr)=>(prev+curr.salary)/(curr.length));

         }

    function AvgAgeofCleaning(){

         return

         	Company.employer.filter(el => el.department == "Cleaning")
         	                .reduce((prev,curr)=>(prev+curr.age)/(curr.length));

         }     

    function AvgAgeofMoney(){

         return

         	Company.employer.filter(el => el.department == "Money")
         	                .map(el => el.age)
         	                .reduce((prev,curr)=>prev+curr);

         }     

    function AvgofMaxSal(){

    	return

    		(`${MaxSalofMoney()} + ${MaxSalofCleaning()}`)/2 
    	
    }     


  console.log(`${MaxSalofCleaning()}`);
  console.log(`${MaxSalofMoney()}`);
  console.log(`${AvgSalofCleaning()}`);
  console.log(`${AvgSalofMoney()}`);   
  console.log(`${AvgAgeofCleaning()}`);   
  console.log(`${AvgAgeofMoney()}`);
  console.log(`${AvgofMaxSal()}`)
 }
}
Company.Info();


