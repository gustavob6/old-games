import '../style.css'

export default function dashboard () {
    const view = ` 
    <div>
        <h1>Old Games</h1>
        <div class="board-cont">
            <button id="game-1" class="btn btn-primary"type="button">Ahorcado</button>
            <button id="game-2" class="btn btn-secondary"type="button">Piedra,Papel o Tijera</button>
        </div>
    </div>`
    return view;
}



