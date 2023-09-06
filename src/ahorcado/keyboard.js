import Ahorcado from "./ahorcado";

const ahorcado = new Ahorcado();

const querty = "qwertyuiopasdfghjklñzxcvbnm";

function crearTeclado(){
	document.querySelector(".letras").innerHTML = "";
	querty.split('').map(el => {
		
		let span = document.createElement("span");

		span.addEventListener("click", teclaPulsada);

		span.innerText = el;
		document.querySelector(".letras").appendChild(span);
	});
}

function teclaPulsada(e) {
	let tecla = e.target.innerHTML;
	console.log(tecla)
	let aux = ahorcado.procesarLetra(tecla);

	if(aux){
		e.target.style.backgroundColor = "green";
		ahorcado.coincidencias = false;
	}else{
		e.target.style.backgroundColor = "red";
	}

	e.target.removeEventListener("click",teclaPulsada);		
}

function eliminarTeclado(){
 	let teclado = document.getElementById("teclado");
	while(teclado.hasChildNodes())
		teclado.removeChild(teclado.firstChild);	
 }

 function resetAhorcado () {
	ahorcado.palabra = ahorcado.listaPalabras[Math.floor(Math.random() * 4)];
	ahorcado.palabraOculta = '';
	ahorcado.intentos = 6;
	ahorcado.aciertos = [];
	eliminarTeclado();
	ahorcado.procesarDatos();
	crearTeclado();

}

export {crearTeclado,resetAhorcado}
