const Routes = {
	"#home":{
		path: "home.html"
	},
	"#mousemove":{
		path: "mousemove.html",
		handler: function(){
			Mousemove();
		}
	},
	"#timer":{
		path: "timer.html",
		handler:function(){
           TimetoTomorrow();
           

		}
	},
	"#converter":{
		path:"converter.html",
		handler:function(){
			Converter()
		}
	},
	"#service":{
		path:"service.html"
	}
}


function Converter(){
var input = document.getElementById('input');
var convert = document.getElementById('convert');
var current = document.getElementById('current');
var converted = document.getElementById('converted');
function convertion() {
    const values = {
    	  
    	  eur: 1,
    	  usd: 0.88,
          byn: 0.41,
          rub: 0.013,
        
    };
  
    convert.value = (values[current.value] * input.value / values[converted.value]).toFixed(2);
}
input.addEventListener('input', convertion);
current.addEventListener('change', convertion);
converted.addEventListener('change', convertion);
}


    
function Mousemove(){
    var tds = document.getElementsByTagName('td');
for(var i=0; i < tds.length;i++){
tds[i].addEventListener("mouseover",function(){	
	this.innerHTML= `?`;
	const t = this;
	setTimeout(function(){
		t.innerHTML = '+'

	},3000)
});

};
}

function TimetoTomorrow(){
var time = document.getElementById("time");

	var q = " ";
	var t = setInterval(function(){
		var d = new Date();
		var str = "";
		var arr = [];
		if(Number(d.getSeconds())%2==0){
			q = ":";
		}
		else{
			q = " ";
		}

		if(23-d.getHours() < 10){
			arr[0] = "0"+(23-d.getHours());
		}
		else{
			arr[0] = (23-d.getHours());
		}
		if(d.getMinutes()==0){
			arr[1] = "00";
		}
		else if( 59-d.getMinutes() < 10 ){
			arr[1] = "0"+(59-d.getMinutes());
		}
		else{
			arr[1] = (59-d.getMinutes());
		}

		if( 60-d.getSeconds() < 10 ){
			arr[2]= "0"+(60-d.getSeconds());
			str += arr[0];
			str += q+arr[1];
			str += q+arr[2] ;
		}
		else{
			if(d.getSeconds() == 0){
					str += arr[0];
					str += q+(Number(arr[1])+1);
					str += q+"00" ;

			}
			else{
				arr[2] = 60-d.getSeconds()
				str += arr[0];
				str += q+arr[1];
				str += q+arr[2];
			}
		}
		
		time.innerHTML = "<b>"+str+"</b>";
		
	},1000);
}




function refreshContainer(){

	const hash = location.hash;
	if (hash in Routes) {
		const path = Routes[hash].path;
		const xhr = new XMLHttpRequest();
            xhr.open("GET",path,true);
            xhr.onload = function(){

              onPageLoaded(this.responseText,hash)

         }
         xhr.send(null)
	}

}

function onPageLoaded(text,hash){
	const div = document.getElementById('container');
	div.innerHTML = text;
	if(typeof Routes[hash].handler=="function"){
		Routes[hash].handler();
	}
}

window.onhashchange = refreshContainer;
refreshContainer();



