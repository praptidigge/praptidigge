// Select custom cursor elements
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    // Position main cursor
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Position inner dot
    cursorDot.style.left = `${e.pageX}px`;
    cursorDot.style.top = `${e.pageY}px`;
});

// Apply effects on hover over links
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Scale up the main cursor on hover
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = '#b98072'; // Change color on hover
        cursorDot.style.backgroundColor = '#d4a494'; // Change inner dot color
    });
    
    link.addEventListener('mouseleave', () => {
        // Reset cursor size and color after hover
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'rgba(217, 188, 176, 0.8)';
        cursorDot.style.backgroundColor = '#d9bcb0';
    });
});
