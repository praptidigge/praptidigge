document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const loaderPercentage = document.querySelector(".loader-percentage");
    const loaderDivider = document.querySelector(".loader-divider");
    const mainContent = document.querySelector(".content");
    const portfolioText = document.querySelector(".loader-vertical-text"); // "Portfolio" text element

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
                preloader.style.display = "none";
                mainContent.classList.add("loaded"); // Start hero animations
            }, 500);
        }
    }, 300);
});
