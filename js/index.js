function easeInOutCubic(x) {
    x = Math.max(0, x);
    x = Math.min(x, 1);

    if (x < 0.5) {
        return 4 * (x ** 3);
    } else {
        return 1 - ((-2 * x + 2) ** 3) / 2
    }
}

function easeInOutSine(x) {
    x = Math.max(0, x);
    x = Math.min(x, 1);

    return -(Math.cos(Math.PI * x) - 1) / 2;
}

function getIStartPosition(word) {
    return -word.offsetWidth / 3;
}

function updateIPosition() {
    const word = document.getElementById('word');
    const letterI = document.getElementById('i');
    const letterL = document.getElementById('l');

    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = scrolled / maxScroll;

    const start = getIStartPosition(word);
    const end = letterL.offsetLeft + letterL.offsetWidth;
    const offset = start + (easeInOutCubic(progress) * (end - start));

    letterI.style.left = `${offset}px`;
}

function updateIOpacity() {
    const word = document.getElementById('word');
    const letterI = document.getElementById('i');

    const left = getIStartPosition(word);
    const right = 0;
    const progress = (letterI.offsetLeft - left) / (right - left);

    letterI.style.opacity = easeInOutSine(progress);
}

function updateConvolColors() {

}

function updateUtionPosition() {

}

function updateWord() {
    updateIPosition();
    updateIOpacity();
    updateConvolColors();
    updateUtionPosition();
}

window.addEventListener('scroll', updateWord);
updateAnimation();
