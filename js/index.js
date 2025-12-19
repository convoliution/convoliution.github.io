function easeInOutCubic(x) {
    x = Math.max(0, x);
    x = Math.min(x, 1);

    if (x < 0.5) {
        return 4 * (x ** 3);
    } else {
        return 1 - ((-2 * x + 2) ** 3) / 2
    }
}

function updateIPosition(progress) {
    const word = document.getElementById('word');
    const letterI = document.getElementById('i');
    const letterL = document.getElementById('l');

    const start = - word.offsetWidth / 3;
    const end = letterL.offsetLeft + letterL.offsetWidth;
    const offset = start + (easeInOutCubic(progress) * (end - start));

    letterI.style.left = `${offset}px`;
}

function updateWord() {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrolled / maxScroll, 1);

    updateIPosition(progress);
}

window.addEventListener('scroll', updateWord);
updateAnimation();
