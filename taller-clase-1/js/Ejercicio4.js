function factorial(){
  var a=document.getElementById("eje4").value;
  for(var i=a-1; i>=1;i--){
  	a *= i;
  }
  return a;
  console.log(a);  
}

function ejercicio4(){
    var aE=document.getElementById("eje4").value;
    var aS=aE.toString(10);
    var strLe=aS.length;
    if(aE>=5){
        var printResultt = document.getElementById("resultado-4");
        printResultt.innerHTML=`<h3>Resultado Punto 4</h3>
        <p>El valor de la derecha es 0 </p>`;
    }else{
        var num=factorial();
        var numbStr=num.toString(10);
        console.log(numbStr);
        numbStr=numbStr.slice(-1);
        console.log(numbStr);
        var ret=parseInt(numbStr,10);
        var printResultt = document.getElementById("resultado-4");
        printResultt.innerHTML=`<h3>Resultado Punto 4</h3>
        <p>El valor de la derecha es ${ret} </p>`;
    }
}