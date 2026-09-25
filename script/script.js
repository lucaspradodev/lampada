const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function islampadaQuebrada(){
    return lampada.src.indexOf ('quebrada') > -1
}

function ligarLampada(){
    if ( !islampadaQuebrada ()) {
        lampada.src = 'img/lampada.acesa.png';
    }   
}

function desligarLampada(){
    if ( !islampadaQuebrada ()) {
        lampada.src='img/lampada.desligada.png';
    }
}

function quebrarLampada(){
    lampada.src='img/lampada.quebrada.png';
}

ligar.addEventListener('click',ligarLampada);
desligar.addEventListener('click',desligarLampada);
lampada.addEventListener('mouseover',ligarLampada);
lampada.addEventListener('mouseleave',desligarLampada);
lampada.addEventListener('dblclick',quebrarLampada);