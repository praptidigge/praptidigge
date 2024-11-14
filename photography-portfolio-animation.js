window.addEventListener('load', () => {
    const firstImage = document.querySelector('.slide img');

    if (firstImage) {
        const { naturalWidth, naturalHeight } = firstImage;
        const aspectRatio = naturalWidth / naturalHeight;

        // Set the viewport dimensions to match the image's natural aspect ratio
        const viewportWidth = window.innerWidth;
        const viewportHeight = viewportWidth / aspectRatio;

        document.body.style.width = `${viewportWidth}px`;
        document.body.style.height = `${viewportHeight}px`;

        // Adjust each slide image to fill the viewport without cropping
        const slides = document.querySelectorAll('.slide img');
        slides.forEach(img => {
            img.style.width = `${viewportWidth}px`;
            img.style.height = `${viewportHeight}px`;
        });
    }
});
