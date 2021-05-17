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

const checkbox = document.querySelector(".theme_switcher");

checkbox.addEventListener("change", function() {
	const themeContainer = document.querySelector(".try");

	themeContainer.classList.toggle('light');
});

xmlhttp.open("GET","../src/hello.txt",true);
xmlhttp.send();
