//Escribe aquí tú código
function notas(){
	var suma= null;
	var menor=100;
	for(var i=1; i<= 40; i++){
		var nota = prompt ("Ingrese la nota del alumno"+i+": ");
		suma= suma+parseInt(nota);
		if(nota<menor){
			menor=nota;
		} else{
			menor=menor;
		}
	}
	var promedio= suma/40;
	document.write("El promedio de las notas es : "+ promedio+ "<br>"+"Y la menor nota es : "+ menor);
}
notas();