const bg_blur = document.getElementById('bg')
const load__text = document.getElementById('load__text')

var contar = 0;

window.onload = function () {
    load__text.innerHTML = contar;
    if (contar == 100) {
        load__text.style.opacity = '0'
    } else {
        load__text.style.opacity = '100%'
        contar++
        setTimeout(contar, 5000)
    }
    bg_blur.style.transition = '5s';
    bg_blur.style.filter = 'blur(0px)';
}