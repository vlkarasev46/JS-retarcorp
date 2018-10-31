
var n = 20;
document.write("<table border='1'>"); 
 for (i=1; i<=n; i++) { 
 document.write("<tr>"); 
for (j=1; j<=n; j++) document.write("<td>"+i*j+"</td>"); {

 document.write("</tr>"); 
}
} 
 document.write("</table>"); 

var trs = document.getElementsByTagName("tr");
for(var i=0; i<n; i++){
	var tds = trs[i].children;
	    tds[i].setAttribute("style","background-color:red");
		}
	
