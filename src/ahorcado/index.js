import Ahorcado from "./ahorcado";
import {resetAhorcado} from './keyboard'
const ahorcado = new Ahorcado();

export function initAhorcado ( ) {
    
    document.querySelector(".btn_play").addEventListener("click",function(){
        ahorcado.procesarDatos();
      });
      document.querySelector(".btn_reset").addEventListener("click",function(){
        resetAhorcado();
      });
      
}