const tabs = document.querySelectorAll('.leaderboard-choose-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

function animateNumber(el, start, end, duration) {
    let startTime = null;

    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);

        el.innerText = Math.floor(progress * (end - start) + start).toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

document.querySelectorAll('.point').forEach(el => {
    let value = parseInt(el.innerText.replace('.', ''));
    animateNumber(el, 0, value, 1000);
});