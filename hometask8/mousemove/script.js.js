

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

//setTimeout(this.innerHTML,3000);