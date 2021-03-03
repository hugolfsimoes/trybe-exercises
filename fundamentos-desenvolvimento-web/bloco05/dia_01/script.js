document.querySelector('h1').style.backgroundColor = "#48B169";
document.querySelector('.emergency-tasks').style.backgroundColor = "#FA9E84";
document.querySelector('.no-emergency-tasks').style.backgroundColor = '#F9DB5E'

let divUm = document.querySelectorAll('.emergency-div h3').length;
for (let index = 0; index < divUm; index += 1) {
  document.querySelectorAll('.emergency-div h3')[index].style.backgroundColor = '#AA6AF3'
}

let divDois = document.querySelectorAll('.no-emergency-div h3').length;
for (let index = 0; index < divDois; index += 1) {
  document.querySelectorAll('.no-emergency-div h3')[index].style.backgroundColor = '#232525';
}

document.getElementById('footer-container').style.backgroundColor = '#0B3532'