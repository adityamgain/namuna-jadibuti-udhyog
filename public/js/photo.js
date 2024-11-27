// photo
let currentSlides = [0, 0, 0]; // Initialize an array for multiple galleries
function showSlide(galleryIndex, index) {
    const slider = document.querySelectorAll('.photo-slider')[galleryIndex]; // Get the correct slider
    const slides = slider.querySelectorAll('.photo'); // Get slides specific to this gallery
    const totalSlides = slides.length;

    // Loop back to the first slide if index exceeds the total slides
    if (index >= totalSlides) {
        currentSlides[galleryIndex] = 0;
    } else if (index < 0) {
        currentSlides[galleryIndex] = totalSlides - 1;
    } else {
        currentSlides[galleryIndex] = index;
    }

    // Calculate the width to translate based on the current slide
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlides[galleryIndex] * slideWidth}px)`;
}

function nextSlide(galleryIndex) {
    showSlide(galleryIndex, currentSlides[galleryIndex] + 1);
}

function prevSlide(galleryIndex) {
    showSlide(galleryIndex, currentSlides[galleryIndex] - 1);
}



// Initialize all galleries on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.photo-gallery').forEach((gallery, index) => {
        showSlide(index, currentSlides[index]); // Show the first slide for each gallery
    });
});

