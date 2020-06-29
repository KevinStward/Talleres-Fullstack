function resolverPrimero(){
    //Obtener los valores de los campos del formulario
    var numero = document.getElementById("numero-punto1").value;
    if(numero == ''){
        //Obtener el div donde se mostraran los resultados.
        var printResult = document.getElementById("resultado-1")
        //Insertar el HTML con los resultados.
        printResult.innerHTML=`
        <h3>Colocar numeros, porfavor</h3>
        `
    }else{
        //Procesar los impares
        var resultadoImpares = primerosImpares(numero);
        //Procesar los pares
        var resultadoPares = primerosPares(numero);
        //Obtener el div donde se mostraran los resultados.
        var printResult = document.getElementById("resultado-1");
        //Insertar el HTML con los resultados.
        printResult.innerHTML=`
        <h3>Los resultados son:</h3>
        <p>Impares: ${resultadoImpares}</p>
        <p>Pares: ${resultadoPares}</p>
        `
    }
}

function primerosImpares(numero){
    var result = 0;
    for(var i = 0 ; i < numero ; i++){
        result+=2*i;
    }
    return result;
};

function primerosPares(numero){
    var result = 0;
    for(var i = 0 ; i < numero ; i++){
        result+=2*i+1;
    }
    return result;
};
