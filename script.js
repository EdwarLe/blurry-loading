const bg_blur = document.getElementById('bg')
const load__text = document.getElementById('load__text')

var contar = 0;

let time = setInterval(() => {
    contar++;
    load__text.textContent = contar + '%';

    if (contar === 100) {
        clearInterval(time)
    }
}, 40)

window.onload = function () {
    load__text.style.transition = '6s';
    load__text.style.opacity = '0';    
    bg_blur.style.transition = '5s';
    bg_blur.style.filter = 'blur(0px)';
}