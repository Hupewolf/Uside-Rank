const tabs = document.querySelectorAll('.filter');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

document.querySelectorAll('.select').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    });
});