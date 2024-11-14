// Existing animation code for project cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    // Step 1: Initial stacked position off-screen
    cards.forEach((card, index) => {
        card.style.position = "absolute";
        card.style.opacity = "0";
        card.style.transform = `translateY(100vh) translateX(-${index * 10}px) rotate(${index * -5}deg)`;
    });

    // Step 2: Slide cards to the "fan-out" position in the center
    setTimeout(() => {
        cards.forEach((card, index) => {
            card.style.transition = "transform 1s ease, opacity 1s ease";
            card.style.opacity = "1";
            card.style.transform = `translateY(0vh) translateX(${(index - 1.5) * 50}px) rotate(${(index - 1.5) * 10}deg)`;
        });
    }, 500); // Delay for initial entry

    // Step 3: After a brief pause, smoothly transition cards to final positions
    setTimeout(() => {
        cards.forEach((card, index) => {
            card.style.transition = "transform 1.5s ease";
            card.style.transform = `translate(${index * 350}px, 0) rotate(0deg)`;
            card.style.opacity = "1";
        });
    }, 1800); // Brief pause after fan-out
});

// Modal functionality for Scratch project
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Show modal
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none"; // Hide modal
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const scratchModal = document.getElementById("scratchModal");
    const p5Modal = document.getElementById("p5Modal");

    // Close Scratch modal if clicked outside
    if (event.target === scratchModal) {
        scratchModal.style.display = "none";
    }
    // Close P5.js modal if clicked outside
    else if (event.target === p5Modal) {
        p5Modal.style.display = "none";
    }
};
