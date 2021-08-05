const container = document.querySelector('.container');
let offset = 0;

window.addEventListener('wheel', (e) => {
    offset += Math.sign(e.deltaY) * 60;

    if (offset < 0) {
        offset = 0;
    } else if (offset > 10000 - window.innerWidth) {
        offset = 10000 - window.innerWidth;
    }

    container.style.transform = `translateX(-${offset}px`;
});