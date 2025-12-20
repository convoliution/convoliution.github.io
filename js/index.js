function bounded(x) {
    x = Math.max(0, x);
    x = Math.min(x, 1);

    return x;
}

function easeInOutCubic(x) {
    x = bounded(x);

    if (x < 0.5) {
        return 4 * (x ** 3);
    } else {
        return 1 - ((-2 * x + 2) ** 3) / 2
    }
}

function easeInOutSine(x) {
    x = bounded(x);

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
    const end = letterL.offsetLeft + letterL.offsetWidth + 2;
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
    const letterI = document.getElementById('i');
    const letters = document.getElementsByClassName('convol');

    const positionI = letterI.offsetLeft + (letterI.offsetWidth / 2);

    Array.from(letters).forEach(letter => {
        const box = getComputedStyle(letter);
        const left = letter.offsetLeft + parseFloat(box.borderLeftWidth) + parseFloat(box.paddingLeft);
        const right = letter.offsetLeft + letter.offsetWidth - parseFloat(box.borderRightWidth) - parseFloat(box.paddingRight);
        const progress = (positionI - left) / (right - left);

        const colorChangePercentage = bounded(progress) * 100;

        letter.style.setProperty('--color-mask', `inset(0 0 0 ${colorChangePercentage}%)`);
    });
}

function updateUtionPosition() {
    const letterI = document.getElementById('i');
    const letterL = document.getElementById('l');
    const letters = document.getElementsByClassName('ution');

    const rightI = letterI.offsetLeft + letterI.offsetWidth;
    const rightL = letterL.offsetLeft + letterL.offsetWidth;
    const offset = Math.max(0, rightI - rightL);

    Array.from(letters).forEach(letter => {
        letter.style.transform = `translateX(${offset}px)`;
    });
}

function updateWord() {
    updateIPosition();
    updateIOpacity();
    updateConvolColors();
    updateUtionPosition();
}

document.getElementById('i').style.position = 'absolute';
window.addEventListener('scroll', updateWord);
window.addEventListener('resize', updateWord);
updateWord();
