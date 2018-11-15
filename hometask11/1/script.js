// const H = (new  Array(10000))
//       .fill(0)
//       .map(x => (Math.random()))
//       .join(" ");
// console.log(H);

const xhr = new XMLHttpRequest();
xhr.open("GET","1/mass.txt",true);
xhr.onload = function(){
	document.body.innerHTML = this.responseText
	
    var num = this.responseText.split(' ');

     var harm = num.reduce((a,b)=>{

    	return 1/a+1/b
    },0);

     alert("Harmonic is: "+harm);

    var avg = num.reduce((a,b)=>{

    	return Number(a)+Number(b)
     },0)/10000;
      
  alert("Average is: "+avg);

}
xhr.send(null);