var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Ingrese nuevo nombre');
  para.textContent = 'Player 1: ' + name;
}