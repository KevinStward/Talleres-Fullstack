function validation(nombre){
    if(nombre.length>10){
        return;
    }else{
    }
}
function ejercicio8(){
    var cadena=document.getElementById("eje8").value;
    var arrayCad=cadena.split(" ");
    if(arrayCad[1]>=5){
        var printResultt = document.getElementById("resultado-8");
        printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
        <p>Es una abuela : VERDADERA </p>`;
    }else{
        var printResultt = document.getElementById("resultado-8");
        printResultt.innerHTML=`<h3>Resultado Punto 8</h3>
        <p>Es una abuela : FALSA </p>`;
    }
    console.log(arrayCad[1]);
}
