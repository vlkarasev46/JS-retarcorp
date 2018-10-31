var mig = true;


var time = setInterval(function(){
    (mig)?
	(document.body.innerText = new Date().toLocaleTimeString(), mig = false):
	(document.body.innerText = new Date().toLocaleTimeString().split(":").join(" "), mig = true)  
},1000)