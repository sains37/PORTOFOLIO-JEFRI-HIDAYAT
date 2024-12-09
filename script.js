let fanIsOn = false;
const fanBlades = document.querySelectorAll('.fan-blade');
const fanButton = document.querySelector('.btn-toggle');

function toggleFan() {
  if (fanIsOn) {
    // Matikan kipas
    fanBlades.forEach(blade => blade.classList.remove('spin'));
    fanButton.innerText = 'Nyalakan Kipas';
  } else {
    // Nyalakan kipas
    fanBlades.forEach(blade => blade.classList.add('spin'));
    fanButton.innerText = 'Matikan Kipas';
  }
  fanIsOn = !fanIsOn;
}
