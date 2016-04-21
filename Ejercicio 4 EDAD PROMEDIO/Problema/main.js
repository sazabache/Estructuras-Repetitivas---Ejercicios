//Escribe aquí tú código
function edprom(){
	var cantidad=prompt("Ingrese cuántos alumnos son: ");
	var edprom=0;
	var i=1;
	while (i<= cantidad){
		var number=prompt("Ingrese la edad "+i+": ");
		edprom= edprom+parseInt(number);
		i++;
	}
	var resultado= edprom/cantidad;
	alert("El promedio de las edades es : "+resultado);
}

edprom();

function edprom2(){
	var cantidad=prompt("Ingrese cuántos alumnos son: ");
	var edprom2=0;
	var i=1;
	do{
		var number=prompt("Ingrese la edad "+i+": ");
		edprom2= edprom2+parseInt(number);
		i++;
	}
	while (i<= cantidad);
	var resultado= edprom2/cantidad;

	alert("El promedio de las edades es : "+resultado);
}

edprom2();

function edprom3(){
	var cantidad=prompt("Ingrese cuántos alumnos son: ");
	var edprom3=0;
	
	for(var i=1; i<= cantidad; i++){
		var number=prompt("Ingrese la edad "+i+": ");
		edprom3= edprom3+parseInt(number);
	}
	var resultado= edprom3/cantidad;

	alert("El promedio de las edades es : "+resultado);
}

edprom3();