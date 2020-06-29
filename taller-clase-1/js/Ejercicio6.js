
function ejercicio6(){
    var valor2=document.getElementById("eje6").value;
    var valor=parseInt(valor2,10);
    if(valor==0){
        var printResultt = document.getElementById("resultado-6");
        printResultt.innerHTML=``;
        return;
    }else{
        var suma=0;
        var cont=valor2.length;
        var cont2=valor2.length;
        for(var i=0; i<cont; i++){
            suma += valor;
            valor=eliminarDigito(valor,cont2);  
            
            cont2--;     
        }
        var printResultt = document.getElementById("resultado-6");
        printResultt.innerHTML=`<h3>Resultado Punto 6</h3>
        <p>La suma es : ${suma} </p>`;
        console.log(suma);
    }
    
}
function eliminarDigito(numero,n){
    //if(n>0){
    numero= numero%(10**(n-1));
    return numero;
    //}
}
