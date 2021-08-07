var images=["r1.jfif","r2.jfif"];
var i = 0;
var j=2;
function nextslide() {  
	
    document.getElementById("pic").src = images[i];
    i++;
   
  
}
function previousslide() {  
	
    document.getElementById("pic").src = images[i];
    i--;
   
  
}