const lampadaOn = document.getElementById('ligar');
const lampadaOff = document.getElementById('desligar');
const lamp = document.getElementById('lamp');


function lampadaLigada () {
    lamp.src = './imagens/on.jpg';
}
lampadaOn.addEventListener('click', lampadaLigada);


function lampadaDesligada (){
    lamp.src = './imagens/off.png';
}
lampadaOff.addEventListener('click', lampadaDesligada);





