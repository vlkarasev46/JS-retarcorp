var timer= function(){

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
timer();

