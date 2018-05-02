function resultado() {  

var text = "";
var i;
for (i = 1; i < 11; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("resultado").innerHTML = text;
}