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