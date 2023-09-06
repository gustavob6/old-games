import stone from '../assets/svgs/stone.svg'
import paper from '../assets/svgs/paper.svg'
import tiger from '../assets/svgs/tiger.svg'
import './style.css'

export const ppt = () => {
    const view = `
    <div class="container1">
    <button id="reset" class="btn btn-primary header">Salir al Dashboard</button>
    <div class="title">
        <p class="text-title"> Piedra Papel o Tijeras</p>
    </div>
    <div class="container-game bg-light">
        <div class="board_game">
            <div class="board-primary">
                <h2 class="text">Ganale a la CPU</h2>
                <button class="init btn btn-success">Iniciar Juego</button>
            </div>
            <div class="text-2" style="display: none;">
                <div class="text2"></div>
            </div>
            <div class="board-secondary" style="display:none">
                <div class="board-player">
                    <div>Player</div>
                    <div class="score-player">0</div>
                </div>
                <div class="board-result">
                    <div class="result-vs"></div>
                </div>
                <div class="board-player">
                    <div>CPU</div>
                    <div class="score-cpu">0</div>
                </div>  
            </div>
            <div class="text-3" style="display: none;">
                <div class="text3">Elige Tu Jugada</div>
            </div>
        </div>
        <div class="container-btn">
            <div class="btns stone">
                <img src="${stone}">
            </div>
            
            <div class="btns paper">
                <img src="${paper}">
            </div>
            <div class="btns tiger">
                <img src="${tiger}">
            </div>  
        </div>
    </div>    
    </div>
    `
    return view;
}



