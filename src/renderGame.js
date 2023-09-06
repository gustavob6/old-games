import { initPpt,resetPpt } from "./ppt";
import { ppt } from "./ppt/view"
import {main} from "./main";
import ahorcado from "./ahorcado/view";
import {crearTeclado,resetAhorcado} from "./ahorcado/keyboard";
import { initAhorcado } from "./ahorcado";

export default function renderGame(element1,element2) {
  
  element2.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = ppt();
    initPpt(document.querySelector('.init'),
            document.querySelector('.stone'),
            document.querySelector('.tiger'),
            document.querySelector('.paper'));
    document.querySelector('#reset').addEventListener('click',()=>{
      resetPpt();
      main();
    })        
  })
  element1.addEventListener('click', () => {
    document.querySelector('#app').innerHTML = ahorcado();
    crearTeclado();
    initAhorcado();  
    document.querySelector('#reset-a').addEventListener('click',()=>{
      resetAhorcado();
      main();
    })     
  })
}
