import Ppt from "./ppt";
const ppt = new Ppt();

export function initPpt(init,stone,scissors,paper) {
    init.addEventListener('click',()=> {
        ppt.initGame();
        stone.addEventListener('click', () => {
            ppt.chooseOption(0);
        });
        
        scissors.addEventListener('click', () => {
            ppt.chooseOption(2);
        });
        
        paper.addEventListener('click', () => {
            ppt.chooseOption(1);
        });
    })
}

export function resetPpt(){
    ppt.score_player = 0;
    ppt.score_cpu = 0;
}




