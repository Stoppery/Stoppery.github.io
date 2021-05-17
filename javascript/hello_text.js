var xmlhttp = new XMLHttpRequest();
let words = [];


xmlhttp.onreadystatechange = function(){
	if(xmlhttp.status==200 && xmlhttp.readyState==4){    
		words = xmlhttp.responseText.split('\n');
		for (var i = 0; i <= words.length-1; i++){
			(function(index) {
				setTimeout(function() { document.getElementById("myh1id").innerHTML = words[index]; }, i*5000);
			})(i);
		}
	}
};


xmlhttp.open("GET","/Stoppery.github.io/src/hello.txt",true);
xmlhttp.send();

