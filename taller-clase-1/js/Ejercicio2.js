
//var valor=10;
function hexadecimal () {
    var valor = document.getElementById("hexaIN").value;
    if(valor=="FIN"){
        return;
    }
    else{
        console.log(valor);
        var deci = parseInt(valor,16);
        console.log(deci);
        var v=deci + 1;
        var hexa=v.toString(16);
        var hex=hexa.toUpperCase();
        console.log(hex);
        var printResultt = document.getElementById("resultado-5");
        printResultt.innerHTML=`<h3>Resultado Punto 5</h3>
        <p>El siguiente hexadecimal es : ${hex} </p>`;
    }
}