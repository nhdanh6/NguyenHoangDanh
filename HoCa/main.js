let btnBg1 = document.querySelector('.container .button-1');
let btnBg2 = document.querySelector('.container .button-2');

let divBg1 = document.querySelector('.container .bg1');
let divBg2 = document.querySelector('.container .bg2');

btnBg1.addEventListener('click', function() {
    divBg1.style.display = 'block';
    divBg2.style.display = 'none';
});

btnBg2.addEventListener('click', function() {
    divBg2.style.display = 'block';
    divBg1.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    let audio1 = document.getElementById('audio1');
    audio1.play();
});


let btnAudio = document.querySelector('.container .button-3');

let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');

let currentAudio = 1;

btnAudio.addEventListener('click', function() {
    if (currentAudio === 1) {
        audio1.pause();
        audio2.play();
        currentAudio = 2;
    } else {
        audio2.pause();
        audio1.play();
        currentAudio = 1;
    }
});


