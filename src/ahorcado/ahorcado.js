export default class Ahorcado{
	constructor(){
		this.listaPalabras = ["ACTOR","AGUAS","AVION","ERROR"];
		this.aciertos = [];
		this.mostrar = '';
		this.pista = "Sustantivo";
		this.palabraOculta = '';
		this.palabra = '';
		this.intentos = 6;
		this.numDraw = 0;
		this.coincidencias = false;
		this.palabra = this.listaPalabras[Math.floor(Math.random() * 4)]
	}

	ocultarPalabra () {
		this.mostrar = '';
		for (let i = 0; i<this.palabra.length; i++) {
			if (this.aciertos[i] == 1) {
				 this.mostrar = this.mostrar + this.palabra[i];
			}else{
				this.mostrar = this.mostrar + '_ ';
			}
		}
		return this.mostrar;
	}

	procesarDatos () {
		
		this.palabra = this.palabra.toUpperCase();
		console.log(this.palabra);

		for (let i = 0;i<this.palabra.length; i++) {
			this.aciertos.push(0);
		}
	
		this.palabraOculta = this.ocultarPalabra();
	
		document.querySelector(".text").innerHTML = this.palabraOculta;
		document.querySelector('.pista').innerHTML = this.pista;
		document.querySelector(".text-fails").innerHTML = this.intentos;
		document.querySelector('.board').style.display = "flex";
		document.querySelector('.container_teclado').style.display = "flex";
		document.querySelector('.btn_reset').style.display = "flex";
		document.querySelector('.btn_play').style.display = "none";
		//document.querySelector('.image').innerHTML =  `<img src="/dibujo/${this.numDraw}.jpg" height="100"> `;
	}

	procesarLetra (letra){
		let auxLetra = letra.toUpperCase();

		for (var i = 0; i<this.palabra.length; i++) {
			if (auxLetra == this.palabra[i]) {
				 this.aciertos[i] = 1;
				 this.coincidencias = true;
			}
		}
		
		if(this.coincidencias == false){
			this.intentos--;
			this.numDraw++;
		}

		this.palabraOculta = this.ocultarPalabra();
		document.querySelector(".text").innerHTML = this.palabraOculta;
		document.querySelector(".text-fails").innerHTML = this.intentos;
		//document.querySelector('.image').innerHTML =  `<img src="./dibujo/${this.numDraw}.jpg" height="100"> `;
	
	if(this.intentos == 0){
		setTimeout(()=>{
			document.querySelector(".result").innerHTML = `Lo siento la palabra era ${this.palabra}`;
			document.querySelector('.board').style.display = "none";
			document.querySelector('.container_teclado').style.display = "none";
		},1000)
	}
		if(this.palabraOculta === this.palabra){
			setTimeout(()=>{
				document.querySelector(".result").innerHTML = `Felicidades la palabra era ${this.palabra}`;
				document.querySelector('.board').style.display = "none";
				document.querySelector('.container_teclado').style.display = "none";
			},1000)
		}
	
		return this.coincidencias;
	};
}