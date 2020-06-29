function isPalidromo(entrada){
    var entrada = document.getElementById("entrada-punto3").value;
    console.log(entrada)
    //Toda entrada sera convertida a string
    entrada = entrada.toString()
    //Pasamos a minusculas
    var frace=entrada.toLowerCase();
    //Limpiamos los espacios en blanco
    var fraceLimpia = cleanString(frace);
    //Variable para guardar la frace al reves
    var fraceAlReves = "";

    for(var i = 0 ; i<=fraceLimpia.length ; i++){
        fraceAlReves += fraceLimpia.slice(fraceLimpia.length-(i+1),fraceLimpia.length-i);
    }

    if(fraceLimpia == fraceAlReves){
        var printResult = document.getElementById("resultado-3");
        //Insertar el HTML con los resultados.
        printResult.innerHTML=`
        <h3>El valor ingresado es palíndromo</h3>
        `
    }else{
        var printResult = document.getElementById("resultado-3");
        //Insertar el HTML con los resultados.
        printResult.innerHTML=`
        <h3>El valor ingresado no es palíndromo</h3>
        `
    }
}

function cleanString(string){
    var strinSplited = string.split(" ");
    var stringConvinate = "";
    for(var i = 0 ; i < strinSplited.length ; i++){
        stringConvinate += strinSplited[i];
    }
    return stringConvinate;
}