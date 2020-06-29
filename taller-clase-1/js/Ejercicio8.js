function validation(nombre){
    if(nombre.length>10){
        return;
    }else{
    }
}
function ejercicio8(){
    var cadena=document.getElementById("eje8").value;
    var printResultt = document.getElementById("resultado-8");
    var arrayCadena = cadena.split(" ");
    if(arrayCadena.length > 102){
        printResultt.innerHTML=`
        <h3>Demasiados nombres colocados</h3>
        `;
    }else{
        var nombreVerdadero = arrayCadena[0]; 
        var intentos = parseInt(arrayCadena[1]);
        if(arrayCadena[intentos+1] == nombreVerdadero){
            printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
            <p>Es una abuela : VERDADERA </p>`;
        }else{
            printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
            <p>Es una abuela : FALSA </p>`;
        }
        /*if(arrayCadena[1] >= 5){
            var printResultt = document.getElementById("resultado-8");
            printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
            <p>Es una abuela : VERDADERA </p>`;
        }else{
            var printResultt = document.getElementById("resultado-8");
            printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
            <p>Es una abuela : FALSA </p>`;
        }*/
    }
}

//console.log(ejercicio8("mireira 5 ximon vicente maria vicente mireira"))