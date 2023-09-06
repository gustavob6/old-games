export default class Ppt{
    constructor(){
        this.opciones = ['Piedra','Papel','Tijeras'];
        this.player = '';
        this.cpu = '';
        this.score_cpu = 0;
        this.score_player = 0;
    }

    chooseOption (number) {
        this.player = this.opciones[number];
        this.cpu = this.opciones[Math.trunc(Math.random()*3)];
        this.chooseWinner();
    }

    chooseWinner () {
        if(this.player === this.cpu){
            document.querySelector('.text2').innerHTML = "DRAW";
            document.querySelector('.text2').style.color = "gray";
            document.querySelector('.result-vs').innerHTML = this.player+' VS '+this.cpu;
        }else if(this.player == 'Piedra' && this.cpu == 'Tijeras'){
            document.querySelector('.text2').innerHTML = "WIN";
            document.querySelector('.text2').style.color = "green";
            document.querySelector('.result-vs').innerHTML = this.player+' VS '+this.cpu;
            this.score_player += 1;
            document.querySelector('.score-player').innerHTML = this.score_player;
            document.querySelector('.score-cpu').innerHTML = this.score_cpu;
        }else if(this.player == 'Tijeras' && this.cpu == 'Papel'){
            document.querySelector('.text2').innerHTML = "WIN";
            document.querySelector('.text2').style.color = "green";
            document.querySelector('.result-vs').innerHTML = this.player+' VS '+this.cpu;
            this.score_player += 1;
            document.querySelector('.score-player').innerHTML = this.score_player;
            document.querySelector('.score-cpu').innerHTML = this.score_cpu;
        }else if(this.player == 'Papel' && this.cpu == 'Piedra'){
            document.querySelector('.text2').innerHTML = "WIN";
            document.querySelector('.text2').style.color = "green";
            document.querySelector('.result-vs').innerHTML = this.player+' VS '+this.cpu;
            this.score_player += 1;
            document.querySelector('.score-player').innerHTML = this.score_player;
            document.querySelector('.score-cpu').innerHTML = this.score_cpu;
        }else{
            document.querySelector('.text2').innerHTML = "LOSS";
            document.querySelector('.text2').style.color = "red";
            document.querySelector('.result-vs').innerHTML = this.player+' VS '+this.cpu;
            this.score_cpu += 1;
            document.querySelector('.score-player').innerHTML = this.score_player;
            document.querySelector('.score-cpu').innerHTML = this.score_cpu;
        }
        document.querySelector('.text3').innerHTML = 'Elige Otra Vez';
    }

    initGame (){
        document.querySelector('.board-primary').style.display = "none";
        document.querySelector('.board-secondary').style.display = "flex";
        document.querySelector('.text-2').style.display = "flex";
        document.querySelector('.text-3').style.display = "flex";
    }
}