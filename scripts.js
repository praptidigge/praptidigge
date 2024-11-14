document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const loaderPercentage = document.querySelector(".loader-percentage");
    const loaderDivider = document.querySelector(".loader-divider");
    const mainContent = document.querySelector(".content");
    const portfolioText = document.querySelector(".loader-vertical-text");

    let loadPercentage = 0;

    // Get the max height of the loader divider based on the height of the "portfolio" text
    const maxHeight = portfolioText.clientHeight;

    // Fake loading progress to increment percentage and divider height
    const loadingInterval = setInterval(() => {
        loadPercentage += Math.floor(Math.random() * 10) + 5;
        if (loadPercentage > 100) loadPercentage = 100;

        loaderPercentage.textContent = loadPercentage + "%";
        loaderDivider.style.height = `${(loadPercentage / 100) * maxHeight}px`; // Adjust height based on percentage

        if (loadPercentage === 100) {
            clearInterval(loadingInterval);

            // Fade out preloader and reveal main content
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.style.display = "none"; // Ensure preloader no longer interferes
                mainContent.classList.add("loaded"); // Start hero animations
                // Animate "HELLO, I'M PRAPTI DIGGE" text jumping down after preloader
                const heroText = document.querySelector('.hero-text');
                const introLine = document.querySelector('.intro-line');
                const nameLine = document.querySelector('.name-line');

                // Set initial state
                heroText.style.opacity = "0";
                introLine.style.transform = "translateY(-100px)";  // Initial position above
                nameLine.style.transform = "translateY(-100px)";  // Initial position above

                // Trigger jumping effect after preloader completes
                setTimeout(() => {
                    heroText.style.transition = "opacity 1s ease";
                    heroText.style.opacity = "1"; // Fade in the text

                    // Introduce the 'staircase' jumping effect
                    introLine.style.transition = "transform 0.8s ease 0.2s"; // Delay for staggered effect
                    nameLine.style.transition = "transform 0.8s ease 0.4s"; // Delay for staggered effect
                    
                    introLine.style.transform = "translateY(0)"; // Jumping down from the first step
                    nameLine.style.transform = "translateY(0)";  // Jumping down from the second step
                }, 500); // Delay this animation a little after the preloader ends
            }, 500); // Duration should match CSS transition (if any)
        }
    }, 300);
});