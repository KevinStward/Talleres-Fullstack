function getPrimos(){
    var nPrimos = document.getElementById("numero-punto2").value;
    var primosEncontrados = 0;
    var arrayPrimos = [];
    var sumPrimos = 0;
    var numeroRecorrido=2;

    /*console.log("Conatidad de primos a buscar:" + nPrimos)
    console.log("-------------------")*/
    while(primosEncontrados<nPrimos){
        var resultado = esPrimo(numeroRecorrido);
        if(resultado){
            arrayPrimos.push(numeroRecorrido);
            sumPrimos+=numeroRecorrido
            primosEncontrados++;
        }
        /*console.log("-------------------")
        console.log("Resultado de: "+numeroRecorrido+ " fue " + resultado)
        console.log("El array va asi: " + arrayPrimos)
        console.log("La suma total va asi: " + sumPrimos)
        console.log("-------------------")*/
        numeroRecorrido++;
    }

    var printResult = document.getElementById("resultado-2");
    //Insertar el HTML con los resultados.
    printResult.innerHTML=`
    <h3>Los resultados son:</h3>
    <p>
    <span> Primos:
    `
    for(var i = 0; i<=arrayPrimos.length-1; i++){
        printResult.innerHTML+=`
        ${arrayPrimos[i]}
        `
    }
    printResult.innerHTML+=`
    </span>
    </p>
    <p>Total: ${sumPrimos}</p>
    `

}

function esPrimo(numero) {
  
    for (var i = 2; i < numero; i++) {
        /*Si el modulo entre los dos numero llega en algun momento a ser 0
        eL NUMERO no puede ser primo
        */
        if (numero % i === 0) {
        return false;
        }
  
    }
    
    if (numero === 1) {
        return false;
    } else {
        return true;
    }
}