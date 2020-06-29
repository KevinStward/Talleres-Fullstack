
String.prototype.reverse = function() {

	var x = this.length;
	var cadena = "";
	while (x>=0) {
		cadena = cadena + this.charAt(x);
		x--;
	}
	return cadena+"JS";
	
};
function imprimirReverse(){
    var str=document.getElementById("rev").value;
    var imp=str.reverse();
    var printResultt = document.getElementById("resultado-7");
        printResultt.innerHTML=`<h3>Resultado Punto 7</h3>
        <p>la Cadena inversa es : ${imp} </p>`;
}
