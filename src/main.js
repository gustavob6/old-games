import dashboard  from './dashboard'
import renderGame from './renderGame';

export function main () {
  document.querySelector('#app').innerHTML = dashboard();
  renderGame(document.querySelector('#game-1'),document.querySelector('#game-2'));
}

main();



