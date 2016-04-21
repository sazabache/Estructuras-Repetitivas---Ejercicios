//Escribe aquí tú código
function tabla(){
	var tabla= parseInt(prompt("Ingrese un número a multiplicar:"));
	var i=0;
	while (i<=12){
		var resultado = tabla*i;
	alert(tabla+ " por " +i+ " es:" +resultado);
		i++;
	}
}

tabla();