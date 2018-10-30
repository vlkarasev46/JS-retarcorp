// var arr = new Array(30000);

// for(var i in arr){

// 	arr.push({
        
//           x:Math.round(Math.random()*20 -10),
//           y:Math.round(Math.random()*20 -10),
//           z:Math.round(Math.random()*20 -10)
// 	})
	
// }
  
  
//  arr.filter(el=> el.x > 0 && el.y > 0 &&el.z > 0 )
 
//  filtered = arr.filter(el=>{

//  	return el.x>=-1&&el.x<=1&&el.y>0&&el.z>0
//  })

// filtered = filtered.filter(el=>{

//     var len = Math.sqrt(el.x**2 + el.y**2 + el.z**2);
    
//     return len>=0&&len<=3
// })

// console.log(filtered);

// var lenA, lenB;
// var sorted=filtered.sort((a,b)=>{
//      lenA = Math.sqrt(a.x**2 + a.y**2 + a.z**2);
//      lenB = Math.sqrt(b.x**2 + b.y**2 + b.z**2);
//      return lenA<lenB
// })
// console.log(sorted);

// var sliced = sorted.slice(sorted.length/2, sorted.length);
// console.log(sliced);


// var res;

// res= sliced.reduce((obj,next)=>{

// 	return {
// 		x: obj.x+next.x,
// 		y: obj.y+next.y,
// 		z: obj.z+next.z
// 	}
// })

// console.log(res);


var arr = new Array(30000)
             .fill({x:0, y:0, z:0})
             .map(el=>{
             	return {
                  x:Number((Math.random()*20 -10).toFixed(2)), 
                  y:Number((Math.random()*20 -10).toFixed(2)),  
                  z:Number((Math.random()*20 -10).toFixed(2)),
             	}
             })
            .filter(el=> (el.x>=-1&&el.x<=1&&el.y>0&&el.z>0) && (el.x > 0 && el.y > 0 &&el.z > 0))
            .filter(el=> Math.sqrt(el.x**2 + el.y**2 + el.z**2)>=0 && Math.sqrt(el.x**2 + el.y**2 + el.z**2<=3))
            .sort((a,b)=>{
            	          Math.sqrt(a.x**2 + a.y**2 + a.z**2)
            	          Math.sqrt(b.x**2 + b.y**2 + b.z**2)
            	   return  a>b?1:-1;
            	})
console.log(arr.slice(arr.length/2,arr.length)
       .reduce((obj,next)=>{
       	   return{
       	   	x: Number((obj.x+next.x).toFixed(2)),
		    y: Number((obj.y+next.y).toFixed(2)),
 		    z: Number((obj.z+next.z).toFixed(2)),
       	   }
       }));
