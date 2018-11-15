const xhr = new XMLHttpRequest();
xhr.open("GET","data.csv",true);
xhr.onload = function(){


    var arr = this.responseText.split('\n').map(x => x.split(", "));

    var contries = arr.map(elem=>{

       return{
                
              country:elem[0],
              flag:elem[1],
              code:elem[2],
              population:elem[3],

       }

    })

  var sorted = contries.sort((a,b)=>a.population-b.population)

 document.createElement("table");


}
xhr.send(null);