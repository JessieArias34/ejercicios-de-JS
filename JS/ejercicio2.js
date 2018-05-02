function resultado() {  

    var numero = "";
    var i=2;
    while (i <= 20) {
        numero += "The number is :D = " + i + "<br>";
        i+=2;
    }
    document.getElementById("resultado").innerHTML = numero;
    }         