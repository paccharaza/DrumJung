function playSound(e) {
    const dataKey = e.type === "mousedown" || e.type === "touchstart" ? (this.dataset ? this.dataset.key : 49) :  e.keyCode;

    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);

    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();

    key.classList.add('key--playing');
}

function removeClass(e) {
    const dataKey = e.type === "mouseup" || e.type === "touchend" ? (this.dataset ? this.dataset.key : 49) : e.keyCode;

    const key = document.querySelector(`.key[data-key="${dataKey}"]`);

    if (!key) return;
    
    key.classList.remove('key--playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeClass);

const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    ['mousedown', 'touchstart'].forEach(function(e) {
        key.addEventListener(e, playSound);
    });
    ['mouseup', 'touchend'].forEach(function(e) {
        key.addEventListener(e, removeClass);
    });
});