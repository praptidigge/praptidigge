document.querySelectorAll('.project-item-scroll').forEach(item => {
    const text = item.getAttribute('data-text');
    const repeatedText = (text + ' ').repeat(20); // Increased repeat count for longer scroll
    item.setAttribute('data-text', repeatedText);
});

// Track current hover to prevent multiple animations
let currentHover = null;

document.querySelectorAll('.project-item-scroll').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (currentHover) {
            currentHover.querySelector('.project-item').style.opacity = '1';
            currentHover.classList.remove('active');
        }
        currentHover = item;
        item.classList.add('active');
        item.querySelector('.project-item').style.opacity = '0.8';
    });

    item.addEventListener('mouseleave', () => {
        if (currentHover === item) {
            currentHover = null;
            item.classList.remove('active');
            item.querySelector('.project-item').style.opacity = '1';
        }
    });
});