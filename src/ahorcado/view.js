import './custom.css'
export default function ahorcado () {
    const view = ` 
	<div class="container-md d-flex align-items-center flex-column h-100">
    	<button id="reset-a" class="btn btn-primary">Salir al dashboard</button>
		<div class="title">
			<div class="text-title">Juego del Ahorcado</div>
		</div>
		<div class="result"></div>
		<button id="reset" class="btn btn-success btn_play">Iniciar Juego</button>
		<div class="flex-row align-items-center justify-content-center board" style="display:none">
			<div class="word shadow-lg p-3 mb-5 bg-body-tertiary rounded">
				<div class=" pista"></div>
				<div class="text"></div>
			</div>

			<div class="fails shadow-lg p-3 mb-5 bg-body-tertiary rounded">
				<div class="text-fails"></div>
			</div>
		</div>

		<div class="container_teclado justify-content-center" style="display:none">
			<div id="teclado" class=" d-flex align-items-center justify-content-center flex-wrap letras"></div>
		</div>
		<button id="reset" class="btn btn-dark btn_reset" style="display:none">Reiniciar Juego</button>
	</div>`
    return view;
}
